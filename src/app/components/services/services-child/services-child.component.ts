import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-services-child',
  templateUrl: './services-child.component.html',
  styleUrls: ['./services-child.component.scss']
})
export class ServicesChildComponent implements OnInit {

  clicks = 0;

  constructor(private readonly commonService: CommonService) { }

  ngOnInit(): void {
  }

  addClick() {
    this.clicks++;
    this.commonService.addClicks();
  }
}
