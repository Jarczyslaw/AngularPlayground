import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskModel } from "../models/task.model";
import { HttpTasks } from "./http-tasks.service";

@Injectable()
export class TasksService { 

  private tasksSubject = new BehaviorSubject<TaskModel[]>([]);

  private get tasks(): TaskModel[] { return this.tasksSubject.getValue(); }

  constructor(private readonly httpTasks: HttpTasks) {
    this.refreshTasks();
  }

  addTask(task: TaskModel): void {
    this.httpTasks.addTask(task).subscribe(_ => {
      this.refreshTasks();
    });
  }

  deleteTask(task: TaskModel): void {
    this.httpTasks.deleteTask(task).subscribe(() => {
      this.refreshTasks();
    })
  }

  doneTask(task: TaskModel): void {
    this.httpTasks.doneTask(task).subscribe(_ => {
      this.refreshTasks();
    })
  }

  getTasksObservable(): Observable<TaskModel[]> {
    return this.tasksSubject.asObservable();
  }

  private refreshTasks(): void {
    this.httpTasks.getTasks().subscribe(x =>this.tasksSubject.next(x));
  }
}