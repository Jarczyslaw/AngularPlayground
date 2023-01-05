import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTestComponent } from './routing-test.component';
import { AppRoutingModule } from '../../app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    RoutingTestComponent,
    PageNotFoundComponent,
    MainPageComponent,
    SubPageComponent
  ],
  exports: [
    RoutingTestComponent
  ]
})
export class RoutingTestModule { }
