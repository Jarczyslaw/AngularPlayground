import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { NgContentSampleComponent } from './components/ng-content-sample/ng-content-sample.component';
import { NestedComponentComponent } from './components/ng-content-sample/nested-component/nested-component.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './components/lifecycle/lifecycle-child/lifecycle-child.component';
import { LocalReferencesComponent } from './components/local-references/local-references.component';
import { LocalReferencesChildComponent } from './components/local-references/local-references-child/local-references-child.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesChildComponent } from './components/services/services-child/services-child.component';
import { CheckedDirective } from './directives/checked.directive';
import { DateDirective } from './directives/date.directive';
import { TransformTaskPipe } from './pipes/transform-task.pipe';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { HttpTestComponent } from './components/http-test/http-test.component';


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
    TasksListComponent,
    NgContentSampleComponent,
    NestedComponentComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    LocalReferencesComponent,
    LocalReferencesChildComponent,
    ServicesComponent,
    ServicesChildComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortByNamePipe,
    HttpTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
