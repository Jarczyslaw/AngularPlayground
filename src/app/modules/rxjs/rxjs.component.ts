import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../shared/toasts/toast-service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  sampleEnabled: boolean = false;
  callOnDestroy: boolean = true;

  constructor(private toastService: ToastService) {
  }

  onSampleInit(): void {
    this.toastService.show('Sample component init');
  }

  onSampleDestroy(): void {
    this.toastService.show('Sample component destroy');
  }

  onSubjectNext(next: string): void {
    this.toastService.show(next);
  }
}
