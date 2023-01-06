import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsComponent } from './template-driven-forms.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [TemplateDrivenFormsComponent],
  exports: [
    TemplateDrivenFormsComponent
  ]
})
export class TemplateDrivenFormsModule { }
