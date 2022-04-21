import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  clicksSum = 0;

  constructor() { }

  addClicks() {
    this.clicksSum += 1;
  }
}
