import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent 
  extends BaseComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy {

  @Input() input: number = 0;

  constructor() {
    super();
    this.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
}
