import { InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Dog } from '../../models/dog';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  
  constructor(@Inject(LOCALE_ID) public localeId: string) {
  }

  title = 'Angular Course';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Rex', 4);

  get getSampleText(): string { return 'TextFromGetter'; }

  showDog(): string {
    return 'My dog\'s name is ' + this.dog.name + ' and it\'s ' + this.dog.age + ' years old';
  }

}
