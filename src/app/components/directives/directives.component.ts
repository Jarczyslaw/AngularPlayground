import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  isEnabled: boolean = true;
  isHidden: boolean = false;
  days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor() { }

  toggleEnabled(): void {
    this.isEnabled = !this.isEnabled;
  }

  toggleHidden(): void {
    this.isHidden = !this.isHidden;
  }
}
