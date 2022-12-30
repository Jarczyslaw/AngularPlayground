import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';

@Component({
  selector: 'app-nested-grid-component',
  templateUrl: './nested-grid-component.component.html',
  styleUrls: ['./nested-grid-component.component.scss']
})
export class NestedGridComponentComponent extends BaseComponent implements AfterViewInit  {

  @ContentChild('p')
  paragraph?: ElementRef;

  @ContentChildren('p')
  paragraphs?: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.log(this.paragraph);
    this.log(this.paragraphs);
  }
}
