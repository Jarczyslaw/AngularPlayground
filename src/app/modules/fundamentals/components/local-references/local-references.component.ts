import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LocalReferencesChildComponent } from './local-references-child/local-references-child.component';

@Component({
  selector: 'app-local-references',
  templateUrl: './local-references.component.html',
  styleUrls: ['./local-references.component.scss']
})
export class LocalReferencesComponent {

  @ViewChild('child1')
  child1!: LocalReferencesChildComponent;

  @ViewChild('child2')
  child2!: LocalReferencesChildComponent;

  @ViewChildren(LocalReferencesChildComponent)
  children!: QueryList<LocalReferencesChildComponent>;

  @ViewChild('inputText')
  input!: ElementRef;

  showInChild1(): void {
    this.child1.content = this.getInput();
  }

  showInChild2(): void {
    this.child2.content = this.getInput();
  }

  showInChildren(): void {
    const input: string = this.getInput();
    this.children.forEach(x => x.content = input);
  }

  private getInput(): string {
    const value: string = this.input.nativeElement.value;
    this.input.nativeElement.value = '';
    return value;
  }
}
