import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { HttpTestService } from './http-test.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss'],
  providers: [
    HttpTestService
  ]
})
export class HttpTestComponent {

  data: any = '';

  constructor(private httpTestService: HttpTestService) { }

  getMovies(): void {
    this.httpTestService.getMovies()
      .subscribe(x => this.data = x);
  }

  getMoviesResponse(): void {
    this.httpTestService.getMoviesResponse()
      .subscribe(x => this.data = x);
  }

  postMovie(): void {
    const movie: Movie = {
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0'
    };

    this.httpTestService.postMovie(movie)
      .subscribe(x => this.data = x);
  }

  putMovie(): void {
    const movie: Movie = {
      id: '53',
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło',
      poster: null,
      year: '2001',
      title: 'Wiedźmin 2',
      imdbRating: '10.0'
    };

    this.httpTestService.putMovie(movie)
      .subscribe(x => this.data = x);
  }

  patchMovie(): void {
    const movie: Partial<Movie> = {
      id: '53',
      plot: 'Geralt szuka Ciri'
    };

    this.httpTestService.patchMovie(movie)
      .subscribe(x => this.data = x);
  }

  deleteMovie(): void { 
    this.httpTestService.deleteMovie('53')
      .subscribe(x => this.data = x);
  }

  makeError(): void {
    this.httpTestService.makeError()
      .subscribe({ 
        next: x => this.data = x,
        error: (x: Error) => this.data = x.message});
  }

  useHeaders(): void {
    this.httpTestService.useHeaders()
      .subscribe(x => this.data = x.headers.keys().join(', '));
  }

  useParams(): void {
    this.httpTestService.useParams()
      .subscribe(x => this.data = x);
  }
}
