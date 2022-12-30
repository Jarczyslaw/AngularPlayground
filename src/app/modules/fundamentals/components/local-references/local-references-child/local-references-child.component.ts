import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-references-child',
  templateUrl: './local-references-child.component.html',
  styleUrls: ['./local-references-child.component.scss']
})
export class LocalReferencesChildComponent {

  content: string = '';

  @Input()
  name: string = '';
}
