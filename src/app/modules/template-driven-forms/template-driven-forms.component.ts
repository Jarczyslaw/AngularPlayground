import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../shared/models/movie';
import { delay, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  model: Partial<Movie> = {};
  years: string[] = []

  constructor() { 
  }

  ngOnInit() {
    this.getYears()
      .subscribe(x => this.years = x);
  }

  logNgForm(movieForm: NgForm): void {
    console.log(movieForm);
  }

  send(): void {
    console.log(this.model);
  }

  private getYears(): Observable<string[]> {
    return of(['2022', '2021', '2020'])
      .pipe(delay(200));
  }
}

