import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';
import { ToastsContainer } from '../../shared/toasts/toasts-container.component';

@NgModule({
  imports: [
    CommonModule,
    ToastsContainer
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