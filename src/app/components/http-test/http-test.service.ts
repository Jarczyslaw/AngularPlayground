import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/app/models/post";

@Injectable()
export class HttpTestService {

  private url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/posts/' + id);
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    const params: HttpParams = new HttpParams().set('userId', userId);
    return this.http.get<Post[]>(this.url + '/posts', { params: params });
  }
}
