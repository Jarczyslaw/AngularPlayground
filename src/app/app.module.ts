import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { InputsOutputsComponent } from './components/inputs-outputs/inputs-outputs.component';
import { SampleListComponent } from './components/inputs-outputs/sample-list/sample-list.component';
import { AddTasksComponent } from './components/todo-list/add-tasks/add-tasks.component';
import { TasksListComponent } from './components/todo-list/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponentComponent,
    StringInterpolationComponent,
    DirectivesComponent,
    TemplatesComponent,
    BindingComponent,
    TodoListComponent,
    InputsOutputsComponent,
    SampleListComponent,
    AddTasksComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
