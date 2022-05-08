import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss'],
  providers: [
    HttpTestService
  ]
})
export class HttpTestComponent implements OnInit {

  constructor(private httpTestService: HttpTestService) { }

  ngOnInit(): void {
  }

  getPosts(): void {
    this.httpTestService.getPosts().subscribe((x: Post[]) => {
      console.log(x);
    });
  }

  getPost(): void {
    this.httpTestService.getPost(2).subscribe((x: Post) => {
      console.log(x);
    });
  }

  getPostByUser(): void {
     this.httpTestService.getPostsByUser(2).subscribe((x: Post[]) => {
      console.log(x);
    });
  }

  addPost(): void {
    const post: Post = {
      userId: 1,
      title: 'My first post',
      body: 'First post about Angular'
    }

    this.httpTestService.addPost(post).subscribe((x: Post) => {
      console.log(x);
    });
  }

  updatePost(): void {
    const post: Post = {
      id: 1,
      title: 'My first post',
      body: 'First post about Angular'
    }

    this.httpTestService.updatePost(post).subscribe((x: Post) => {
      console.log(x);
    });
  }

  deletePost(): void {
    this.httpTestService.deletePost(2).subscribe((x: Post) => {
      console.log(x);
    });
  }

  changePost(): void {
    const post: Post = {
      id: 1,
      title: 'My first post',
    }

    this.httpTestService.changePost(post).subscribe((x: Post) => {
      console.log(x);
    });
  }
}
