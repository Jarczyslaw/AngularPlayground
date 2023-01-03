import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ToastService } from 'src/app/shared/toasts/toast-service';

@Component({
  selector: 'app-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.css'],
})
export class RxjsSampleComponent implements OnInit, OnDestroy {

  @Output()
  onInit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onDestroy: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    this.onInit.emit();
  }

	ngOnDestroy(): void {
    this.onDestroy.emit();
	}
}
