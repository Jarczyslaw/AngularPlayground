import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {

  constructor() { }

  title = 'Angulara';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Reksio', 4);

  showDog(): string {
    return 'Mój pies to: ' + this.dog.name + ', ma ' + this.dog.age + ' lata';
  }

}
