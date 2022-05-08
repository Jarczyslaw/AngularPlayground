import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/app/models/post";

@Injectable()
export class HttpTestService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPostsWithError(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/asd');
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + '/' + id);
  }

  getPostsByUser(userId: number): Observable<Post[]> {
    const params: HttpParams = new HttpParams().set('userId', userId);
    return this.http.get<Post[]>(this.url, { params: params });
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.url + '/' + post.id, post);
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(this.url + '/' + id);
  }

  changePost(post: Post): Observable<Post> {
    return this.http.patch<Post>(this.url + '/' + post.id, post);
  }
}
