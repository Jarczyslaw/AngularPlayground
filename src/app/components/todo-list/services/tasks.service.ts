import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskModel } from "../models/task.model";

@Injectable()
export class TasksService { 

  tasks: TaskModel[] = [];

  private tasksSubject = new BehaviorSubject<TaskModel[]>([]);

  constructor() {
    this.tasks = [
      <TaskModel> { 
        name: 'Sprzątanie kuwety',
        created: new Date()
      },
      <TaskModel> { 
        name: 'Nauka angulara',
        created: new Date()
      },
      <TaskModel> { 
        name: 'Podlewanie kwiatów',
        created: new Date()
      },
      <TaskModel> { 
        name: 'Zakupy',
        created: new Date()
      },
    ];
    this.tasksSubject.next(this.tasks);
  }

  addTask(task: TaskModel): void {
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(task: TaskModel): void {
    this.removeFromArray(task, this.tasks);
  }

  doneTask(task: TaskModel): void {
    task.isDone = true;
    task.end = new Date();

    this.tasksSubject.next(this.tasks);
  }

  getTasksObservable(): Observable<TaskModel[]> {
    return this.tasksSubject.asObservable();
  }

  private removeFromArray(item: TaskModel, array: TaskModel[]): void {
    const index: number = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}