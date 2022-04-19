import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoTasks: string[] = [];
  doneTasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: string): void {
    this.todoTasks.push(task);
  }

  deleteTask(task: string): void {
    this.removeFromArray(task, this.todoTasks);
  }

  doneTask(task: string): void {
    this.deleteTask(task);
    this.doneTasks.push(task);
  }

  private removeFromArray(item: string, array: string[]): void {
    const index: number = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
