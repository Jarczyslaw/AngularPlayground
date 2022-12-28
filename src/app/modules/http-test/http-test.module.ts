import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpTestComponent } from './http-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HttpTestComponent],
  exports: [HttpTestComponent]
})
export class HttpTestModule { }
