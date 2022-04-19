import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.scss']
})
export class InputsOutputsComponent implements OnInit {

  items: string[] = ['item1', 'item2', 'item3'];

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(item: string): void {
    alert(item);
  }
}
