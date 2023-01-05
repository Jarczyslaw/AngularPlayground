import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent extends BaseComponent {

  logoUrl: string = '';
  maxLength: number = 10;
  inputText: string = 'test';
  isDisabled: boolean = true;
  headerClass: string[] = ['color', 'bold'];
  inputModel: string = '';
  value: string = '';

  constructor() {
    super();
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  propertyBindingClick(): void {
    this.inputText = "Test test test";
    this.maxLength = 10;
    this.headerClass = ['color2', 'bold'];
    this.logoUrl = '../../../assets/lin.png';
  }

  onFocus() {
    this.log('onFocus');
  }

  onClick(event: any) {
    this.log(event);
  }

  onMove(event: any) {
    this.log(event);
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  onPaste() {
    this.inputText = 'Pasted!';
  }

  onKeyUp(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    this.log(element.value);
  }

  clearInput(): void {
    this.inputModel = '';
    this.value = '';
  }

  getHeaderStyle(): any {
    return {
      fontSize: '40px',
      color: 'red'
    };
  }
}
