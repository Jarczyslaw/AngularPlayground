import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RxjsComponent,
    RxjsSampleComponent
  ],
  exports: [
    RxjsComponent
  ]
})
export class RxjsModule { }
