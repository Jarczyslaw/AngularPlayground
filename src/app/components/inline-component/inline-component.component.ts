import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  template: `<p>Component without template and css files</p>`,
  styles: [`h1 { font-size: 36px; }`]
})
export class InlineComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
