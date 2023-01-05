import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';
import { ToastsContainer } from '../shared/toasts/toasts-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
