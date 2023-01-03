import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastService } from 'src/app/shared/toasts/toast-service';

@Component({
  selector: 'app-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls: ['./rxjs-sample.component.css'],
})
export class RxjsSampleComponent implements OnInit, OnDestroy {

  constructor(private toastService: ToastService) {
    
  }

  ngOnInit(): void {
  }

	ngOnDestroy(): void {
	}
}
