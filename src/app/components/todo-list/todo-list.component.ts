import { Component, OnInit } from '@angular/core';
import { TaskModel } from './models/task.model';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [
    TasksService
  ]
})
export class TodoListComponent implements OnInit {

  todoTasks: TaskModel[] = [];
  doneTasks: TaskModel[] = [];

  constructor(private readonly tasksService: TasksService) {
    tasksService.getDoneTasksObservable()
      .subscribe(x => this.doneTasks = x.slice());
    
    tasksService.getTodoTasksObservable()
      .subscribe(x => this.todoTasks = x.slice());
  }

  ngOnInit(): void {
  }

  addTask(task: TaskModel) {
    console.log('Task was added: ' + task.name);
  }

  deleteTask(task: TaskModel) {
    console.log('Task was deleted: ' + task.name);
  }

  doneTask(task: TaskModel) {
    console.log('Task was done: ' + task.name);
  }
}
