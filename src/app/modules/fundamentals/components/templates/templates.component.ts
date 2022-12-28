import { Component, OnInit } from '@angular/core';
import { Dog } from 'src/app/modules/fundamentals/models/dog';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {

  dogs: Dog[] = [];

  constructor() { }

  addDogs(): void {
    this.removeDogs();
    this.dogs.push(new Dog('Reksio', 5), new Dog('Burek', 8), new Dog('Zosia', 2));
  }

  removeDogs(): void {
    this.dogs.length = 0;
  } 
}
