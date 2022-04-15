import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InlineComponentComponent,
    StringInterpolationComponent,
    DirectivesComponent,
    TemplatesComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
