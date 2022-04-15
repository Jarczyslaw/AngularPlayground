import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponentComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
