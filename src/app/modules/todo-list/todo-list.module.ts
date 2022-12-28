import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    TodoListComponent,
    AddTasksComponent,
    TasksListComponent
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
