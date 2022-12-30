import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-expression-changed-error',
  templateUrl: './expression-changed-error.component.html',
  styleUrls: ['./expression-changed-error.component.scss']
})
export class ExpressionChangedErrorComponent implements AfterViewInit, OnInit {
  
  text: string = 'test';

  ngOnInit(): void {
    this.text = 'This will not cause an expressionChangedAfter...Error';
  }

  ngAfterViewInit(): void {
     this.text = 'This will cause an expressionChangedAfter...Error';

     setTimeout(() => {
      this.text = 'This will not cause an expressionChangedAfter...Error';
     }, 0);
  }
}
