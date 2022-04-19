import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent implements OnInit {

  @Input() items: string[] = [];
  @Output() selectedItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  select(item: string): void {
    this.selectedItem.emit(item);
  }
}
