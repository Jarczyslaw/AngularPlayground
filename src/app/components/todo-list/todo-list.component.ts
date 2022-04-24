import { Component, OnInit } from '@angular/core';
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

  todoTasks: string[] = [];
  doneTasks: string[] = [];

  constructor(private readonly tasksService: TasksService) {
    tasksService.getDoneTasksObservable()
      .subscribe(x => this.doneTasks = x);
    
    tasksService.getTodoTasksObservable()
      .subscribe(x => this.todoTasks = x);
  }

  ngOnInit(): void {
  }

  addTask(task: string) {
    console.log('Task was added: ' + task);
  }

  deleteTask(task: string) {
    console.log('Task was deleted: ' + task);
  }

  doneTask(task: string) {
    console.log('Task was done: ' + task);
  }
}
