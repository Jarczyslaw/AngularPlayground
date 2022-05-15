import { Component, OnInit } from '@angular/core';
import { TaskModel } from './models/task.model';
import { HttpTasks } from './services/http-tasks.service';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [
    TasksService,
    HttpTasks
  ]
})
export class TodoListComponent implements OnInit {

  todoTasks: TaskModel[] = [];
  doneTasks: TaskModel[] = [];

  constructor(private readonly tasksService: TasksService) {
    tasksService.getTasksObservable()
      .subscribe(x => {
        this.todoTasks = x.filter(y => !y.isDone);
        this.doneTasks = x.filter(y => y.isDone);
      });
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
