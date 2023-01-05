import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent 
  extends BaseComponent {

  counter: number = 0;
  limit: number = 0;

  click(): void {
    this.counter++;
  }

  getInfo(): string {
    if (this.limit < 10) {
      this.log('GetInfo called due to ChangeDetection');
    }

    this.limit++;
    return 'GetInfo';
  }

}
