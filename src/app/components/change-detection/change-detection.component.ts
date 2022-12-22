import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements AfterViewInit {

  counter: number = 0;
  viewInitialized: boolean = false;

  ngAfterViewInit(): void {
    this.viewInitialized = true;
  }

  click(): void {
    this.counter++;
  }

  getInfo(): string {
    if (this.viewInitialized) {
      console.log('GetInfo called due to ChangeDetection');
    }
    return 'GetInfo';
  }

}
