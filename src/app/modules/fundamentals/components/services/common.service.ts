import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class CommonService {

  private clicksSum = 0;
  private sum = new Subject<number>();

  constructor() { }

  addClicks() {
    this.clicksSum += 1;
    this.sum.next(this.clicksSum);
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
