import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestQuotesComponent } from './best-quotes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    BestQuotesComponent
  ],
  declarations: [BestQuotesComponent]
})
export class BestQuotesModule { }
