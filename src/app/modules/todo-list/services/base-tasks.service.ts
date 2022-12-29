import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskModel } from "../models/task.model";

export abstract class BaseTasksService {
  public abstract addTask(task: TaskModel): void;
  public abstract deleteTask(task: TaskModel): void;
  public abstract doneTask(task: TaskModel): void;
  public abstract getTasksObservable(): Observable<TaskModel[]>;
}