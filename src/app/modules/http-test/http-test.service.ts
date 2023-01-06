import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Movie } from "./models/movie";

@Injectable()
export class HttpTestService {

  private url: string = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url)
      .pipe(tap(console.log));
  }

  getMoviesResponse(): Observable<HttpResponse<Movie[]>> {
    return this.http.get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
      .pipe(tap(console.log));
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.http.post(this.url, movie)
      .pipe(tap(console.log));
  }

  putMovie(movie: Movie): Observable<Movie> {
    return this.http.put(this.url + '/' + movie.id, movie)
      .pipe(tap(console.log));
  }

  patchMovie(movie: Partial<Movie>): Observable<Movie> {
    return this.http.patch(this.url + '/' + movie.id, movie)
      .pipe(tap(console.log));
  }
  
  deleteMovie(id: string): Observable<{}> {
    return this.http.delete(this.url + '/' + id)
      .pipe(tap(console.log));
  }

  makeError(): Observable<Movie> {
    return this.http.delete(this.url + '/asdfghh')
      .pipe(tap(console.log), catchError(this.handleError));
  }

  useHeaders(): Observable<HttpResponse<Movie[]>> {
    const headers = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'test'
    });

    return this.http.get<Movie[]>(this.url, { observe: 'response', headers: headers })
      .pipe(
        tap((x: HttpResponse<Movie[]>) => {
          console.log(x.headers.keys());
          console.log(x.headers.get('Content-Type'))
        }));
  }

  useParams(): Observable<Movie[]> {
    const params = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc');

    return this.http.get<Movie[]>(this.url, { params: params })
      .pipe(tap(console.log));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status}`
    );
    
    return throwError(() => new Error('Something bad happened; please try again later'));
  }
}
