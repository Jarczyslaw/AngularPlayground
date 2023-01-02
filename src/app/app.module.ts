import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData, CommonModule } from '@angular/common';

import localePl from '@angular/common/locales/pl';
import localeBn from '@angular/common/locales/bn';
import { TodoListModule } from './modules/todo-list/todo-list.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpTestModule } from './modules/http-test/http-test.module';
import { FundamentalsModule } from './modules/fundamentals/fundamentals.module';
import { MiscModule } from './modules/misc/misc.module';

registerLocaleData(localePl);
registerLocaleData(localeBn);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    TodoListModule,
    SharedModule,
    HttpTestModule,
    FundamentalsModule,
    MiscModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
