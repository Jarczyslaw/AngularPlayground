import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  createDate!: Date;

  @Input()
  doneDate?: Date;

  private paragraph: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseEnter(event: Event): void {
    let date: Date;
    if (this.doneDate != null) {
      date = this.doneDate;
    } else {
      date = this.createDate;
    }

    this.paragraph.innerHTML = date.toLocaleDateString();

    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseLeave(event: Event): void {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
