import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class TasksService { 

  todoTasks: string[] = [];
  doneTasks: string[] = [];

  private todoTasksSubject = new BehaviorSubject<string[]>(this.todoTasks);
  private doneTasksSubject = new BehaviorSubject<string[]>(this.doneTasks);

  constructor() {
    this.todoTasks = ['Sprzątanie kuwety', 'Nauka angulara', 'Podlewanie kwiatów', 'Zakupy'];
    this.todoTasksSubject.next(this.todoTasks);
  }

  addTask(task: string): void {
    this.todoTasks.push(task);
    this.todoTasksSubject.next(this.todoTasks);
  }

  deleteTask(task: string): void {
    this.removeFromArray(task, this.todoTasks);
  }

  doneTask(task: string): void {
    this.deleteTask(task);
    this.doneTasks.push(task);

    this.todoTasksSubject.next(this.todoTasks);
    this.doneTasksSubject.next(this.doneTasks);
  }

  getTodoTasksObservable(): Observable<string[]> {
    return this.todoTasksSubject.asObservable();
  }

  getDoneTasksObservable(): Observable<string[]> {
    return this.doneTasksSubject.asObservable();
  }

  private removeFromArray(item: string, array: string[]): void {
    const index: number = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}