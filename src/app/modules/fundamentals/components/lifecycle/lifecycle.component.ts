import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {

  enabled: boolean = true;
  input: number = 0;

  constructor() { }

  toggleEnabled(): void {
    this.enabled = !this.enabled;
  }

  increment(): void {
    ++this.input;
  }
}
