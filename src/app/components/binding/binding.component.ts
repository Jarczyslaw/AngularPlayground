import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  logoUrl: string = '';
  maxLength: number = 10;
  inputText: string = 'test';
  isDisabled: boolean = true;
  headerClass: string = 'color';
  inputModel: string = '';

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  propertyBindingClick(): void {
    this.inputText = "Test test test";
    this.maxLength = 10;
    this.headerClass = 'color2';
    this.logoUrl = '../../../assets/lin.png';
  }

  onFocus() {
    console.log('onFocus');
  }

  onClick(event: any) {
    console.log(event);
  }

  onMove(event: any) {
    console.log(event);
  }

  onPaste() {
    this.inputText = 'Pasted!';
  }

  onKeyUp(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
  }

  clearInput(): void {
    this.inputModel = '';
  }
}
