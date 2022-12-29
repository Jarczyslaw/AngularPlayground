import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { TaskModel } from "../models/task.model";
import { BaseTasksService } from "./base-tasks.service";
import { HttpTasks } from "./http-tasks.service";

@Injectable()
export class LocalTasksService implements BaseTasksService { 

  private tasksSubject = new BehaviorSubject<TaskModel[]>([]);
  private tasks: TaskModel[] = [];

  constructor() {
    this.tasks.push(
      <TaskModel> {
        name: 'Go for a walk',
        isDone: false,
        created: new Date().toLocaleString()
      });

    this.tasks.push(
      <TaskModel> {
        name: 'Do the laundry',
        isDone: false,
        created: new Date().toLocaleString()
      });
    
    this.tasks.push(
      <TaskModel> {
        name: 'Exercise',
        isDone: false,
        created: new Date().toLocaleString()
      }); 
    
    this.refreshTasks();
  }

  addTask(task: TaskModel): void {
    this.tasks.push(task);
    this.refreshTasks();
  }

  deleteTask(task: TaskModel): void {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
    this.refreshTasks();
  }

  doneTask(task: TaskModel): void {
    task.isDone = true;
    this.refreshTasks();
  }

  getTasksObservable(): Observable<TaskModel[]> {
    return this.tasksSubject.asObservable();
  }

  private refreshTasks(): void {
    this.tasksSubject.next(this.tasks);
  }
}