import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskName: string = '';
  todoTasks: string[] = [];
  doneTasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.taskName == null || this.taskName.length === 0) {
      alert("Invalid task name");
      return;
    }

    this.todoTasks.push(this.taskName);
    this.taskName = '';
  }

  deleteTask(task: string): void {
    this.removeFromArray(task, this.todoTasks);
  }

  doneTask(task: string): void {
    this.removeFromArray(task, this.todoTasks);
    this.doneTasks.push(task);
  }

  private removeFromArray(item: string, array: string[]): void {
    const index: number = array.indexOf(item);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
