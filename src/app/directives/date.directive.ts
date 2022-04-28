import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  createDate!: Date;

  @Input()
  doneDate?: Date;

  constructor() { }

  @HostListener('mouseenter')
  mouseEnter(event: Event): void {
    
  }

  @HostListener('mouseleave')
  mouseLeave(event: Event): void {

  }
}
