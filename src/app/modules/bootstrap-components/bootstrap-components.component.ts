import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/toasts/toast-service';
import { ToastsContainer } from '../../shared/toasts/toasts-container.component';

@Component({
  selector: 'app-bootstrap-components',
  templateUrl: './bootstrap-components.component.html',
  styleUrls: ['./bootstrap-components.component.css']
})
export class BootstrapComponentsComponent implements OnInit {

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
  }

	showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(dangerTpl: any) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}
