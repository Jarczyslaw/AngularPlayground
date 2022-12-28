import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocalReferencesChildComponent } from './local-references-child/local-references-child.component';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.scss']
})
export class LocalReferencesComponent implements OnInit {

  @ViewChild('child')
  child!: LocalReferencesChildComponent;

  @ViewChild('inputText')
  input!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  add(input: HTMLInputElement) {
    this.child.content = input.value;
    this.input.nativeElement.value = '';
  }
}
