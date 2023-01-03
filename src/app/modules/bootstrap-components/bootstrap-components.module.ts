import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapComponentsComponent } from './bootstrap-components.component';
import { ToastsContainer } from '../../shared/toasts/toasts-container.component';

@NgModule({
  imports: [
    CommonModule,
    ToastsContainer
  ],
  declarations: [BootstrapComponentsComponent],
  exports: [
    BootstrapComponentsComponent
  ]
})
export class BootstrapComponentsModule { }
