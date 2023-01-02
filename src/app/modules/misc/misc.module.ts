import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscComponent } from './misc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MiscComponent],
  exports: [
    MiscComponent
  ]
})
export class MiscModule { }
