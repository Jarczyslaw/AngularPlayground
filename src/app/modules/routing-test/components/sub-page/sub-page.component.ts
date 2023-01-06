import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit {

  paramValue: string = '';
  paramValueFromSnapshot: string = '';
  queryParam: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(x => this.paramValue = x.get('id') ?? '');

    this.paramValueFromSnapshot = this.route.snapshot.paramMap.get('id') ?? '';

    this.route.queryParamMap
      .subscribe(x => this.queryParam = x.get('queryParam') ?? '');
  }

  goToMainPage(): void {
    this.router.navigate(['/main']);
  }

  goBack(): void {
    this.location.back();
  }
}
