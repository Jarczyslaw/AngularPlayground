import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundamentalsComponent } from './fundamentals.component';
import { BindingComponent } from './components/binding/binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InlineComponentComponent } from './components/inline-component/inline-component.component';
import { InputsOutputsComponent } from './components/inputs-outputs/inputs-outputs.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { NgContentSampleComponent } from './components/ng-content-sample/ng-content-sample.component';
import { LocalReferencesComponent } from './components/local-references/local-references.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from '../shared/shared.module';
import { ServicesChildComponent } from './components/services/services-child/services-child.component';
import { NestedComponentComponent } from './components/ng-content-sample/nested-component/nested-component.component';
import { LocalReferencesChildComponent } from './components/local-references/local-references-child/local-references-child.component';
import { LifecycleChildComponent } from './components/lifecycle/lifecycle-child/lifecycle-child.component';
import { SampleListComponent } from './components/inputs-outputs/sample-list/sample-list.component';
import { SanitizationComponent } from './components/sanitization/sanitization.component';
import { NestedGridComponentComponent } from './components/ng-content-sample/nested-grid-component/nested-grid-component.component';
import { ExpressionChangedErrorComponent } from './components/expression-changed-error/expression-changed-error.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FundamentalsComponent,
    BindingComponent,
    ChangeDetectionComponent,
    DirectivesComponent,
    InlineComponentComponent,
    InputsOutputsComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    NgContentSampleComponent,
    LocalReferencesComponent,
    StringInterpolationComponent,
    TemplatesComponent,
    ServicesComponent,
    ServicesChildComponent,
    NestedComponentComponent,
    LocalReferencesChildComponent,
    SampleListComponent,
    SanitizationComponent,
    NestedGridComponentComponent,
    ExpressionChangedErrorComponent
  ],
  exports: [FundamentalsComponent]
})
export class FundamentalsModule { }
