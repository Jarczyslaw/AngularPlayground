import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskModel } from "../models/task.model";

@Injectable()
export class TasksService { 

  todoTasks: TaskModel[] = [];
  doneTasks: TaskModel[] = [];

  private todoTasksSubject = new BehaviorSubject<TaskModel[]>([]);
  private doneTasksSubject = new BehaviorSubject<TaskModel[]>([]);

  constructor() {
    this.todoTasks = [
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
    this.todoTasksSubject.next(this.todoTasks);
  }

  addTask(task: TaskModel): void {
    this.todoTasks.push(task);
    this.todoTasksSubject.next(this.todoTasks);
  }

  deleteTask(task: TaskModel): void {
    this.removeFromArray(task, this.todoTasks);
  }

  doneTask(task: TaskModel): void {
    this.deleteTask(task);
    this.doneTasks.push(task);

    this.todoTasksSubject.next(this.todoTasks);
    this.doneTasksSubject.next(this.doneTasks);
  }

  getTodoTasksObservable(): Observable<TaskModel[]> {
    return this.todoTasksSubject.asObservable();
  }

  getDoneTasksObservable(): Observable<TaskModel[]> {
    return this.doneTasksSubject.asObservable();
  }

  private removeFromArray(item: TaskModel, array: TaskModel[]): void {
    const index: number = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}