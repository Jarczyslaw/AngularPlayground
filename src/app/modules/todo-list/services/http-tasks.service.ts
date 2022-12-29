import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ObjectId } from "bson";
import { map } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { TaskModel } from "../models/task.model";
import { API_KEY, API_URL } from "./api-data";

interface FindResponse {
  documents: TaskModel[];
}

interface InsertResponse {
  insertedId: ObjectId;
}

@Injectable()
export class HttpTasks {
  constructor(private readonly httpClient: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<TaskModel[]> {
    const body = this.getRequestBody();
    const options = this.getRequestOptions();

    return this.httpClient.post<FindResponse>(API_URL + '/action/find', body, options)
      .pipe(map(x => x.documents));
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    const body = this.getRequestBody();
    body.document = task;
    const options = this.getRequestOptions();

    return this.httpClient.post<InsertResponse>(API_URL + '/action/insertOne', body, options)
      .pipe(map(x => {
        task._id = x.insertedId;
        return task;
      }));
  }

  doneTask(task: TaskModel): Observable<any> {
    const body = this.getRequestBody();
    body.filter = {
      _id: {
        $oid: task._id?.toString()
      }
    }
    body.update = {
      $set: {
        isDone: true,
        end: new Date()
      }
    }

    const options = this.getRequestOptions();

    return this.httpClient.post(API_URL + '/action/updateOne', body, options);
  } 

  deleteTask(task: TaskModel): Observable<any> {
    const body = this.getRequestBody();
    body.filter = {
      _id: {
        $oid: task._id?.toString()
      }
    }
    const options = this.getRequestOptions();

    return this.httpClient.post(API_URL + '/action/deleteOne', body, options);
  }

  private getRequestBody(): any {
    return { 
      collection: 'tasks',
      database: 'angular',
      dataSource: 'AngularPlayground'
    }
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'api-key': API_KEY
    });
    return { headers: headers };
  }
}