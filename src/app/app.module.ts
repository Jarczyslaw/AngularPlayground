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
import { RxjsModule } from './modules/rxjs/rxjs.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponentsModule } from './modules/bootstrap-components/bootstrap-components.module';
import { RoutingTestModule } from './modules/routing-test/routing-test.module';
import { AppRoutingModule } from './app-routing.module';
import { TemplateDrivenFormsModule } from './modules/template-driven-forms/template-driven-forms.module';

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
    MiscModule,
    RxjsModule,
    NgbModule,
    BootstrapComponentsModule,
    RoutingTestModule,
    AppRoutingModule,
    TemplateDrivenFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
