import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription, BehaviorSubject, of, from, Subject, zip, delay, map, fromEvent, tap, switchScan, interval, switchMap } from 'rxjs';
import { ToastService } from 'src/app/shared/toasts/toast-service';
import { Observable } from 'rxjs/internal/Observable';
import { BaseComponent } from '../../../shared/base-component';

@Component({
  selector: 'app-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.css'],
})
export class RxjsSampleComponent extends BaseComponent implements OnInit, OnDestroy {

  itemName: string = '';
  zipResult: string = '';
  pipeResult: string = '';
  mouseClickResult: string = '';
  switchmapResult: number = 0;

  private exampleArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private subscription?: Subscription;
  private subject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get subjectObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  get ofObservable(): Observable<number[]> {
    return of(this.exampleArray);
  }

  get fromObservable(): Observable<number> {
    return from(this.exampleArray);
  }

  @Output()
  onInit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDestroy: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSubjectNext: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  callOnDestroy: boolean = true;

  constructor(private toastService: ToastService) {
    super();
  }

  ngOnInit(): void {
    this.onInit.emit();

    this.subscription = this.subject.subscribe(x => {
      if (x !== '') {
        this.onSubjectNext.emit(`New item emitted: ${x}`);
      }
    });

    this.subject.pipe(
      tap(x => this.log('Before map')),
      map((x: string) => x.toUpperCase()))
        .subscribe(x => this.pipeResult = x);

    const sourceOne = of('Hello');
    const sourceTwo = of('World!');
    zip(sourceOne, sourceTwo.pipe(delay(1000)))
      .subscribe(x => this.zipResult = x.join(', '));

    fromEvent(document, 'click')
      .subscribe(x => {
        const evt: PointerEvent = x as PointerEvent;
        this.mouseClickResult = `(${evt.x}, ${evt.y})`;
      });

    fromEvent(document, 'click').pipe(
      switchMap(x => interval(1000)))
        .subscribe(x => this.switchmapResult = x);
  }

	ngOnDestroy(): void {
    if (this.callOnDestroy) {
      this.onDestroy.emit();
      this.subscription?.unsubscribe();
    }
	}

  addItem(): void {
    if (this.itemName !== '') {
      this.subject.next(this.itemName);
      this.itemName = '';
    }
  }
}
