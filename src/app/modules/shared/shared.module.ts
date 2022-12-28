import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { TransformTaskPipe } from './pipes/transform-task.pipe';
import { CheckedDirective } from './directives/checked.directive';
import { DateDirective } from './directives/date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CheckedDirective,
    DateDirective,
    SortByNamePipe,
    TransformTaskPipe
  ],
  exports: [
    CheckedDirective,
    DateDirective,
    SortByNamePipe,
    TransformTaskPipe
  ]
})
export class SharedModule { }
