import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [
    CommonService
  ]
})
export class ServicesComponent implements OnInit {

  clicksSum: number = 0;

  constructor(private readonly commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getSum().subscribe(x => this.clicksSum = x);
  }

}
