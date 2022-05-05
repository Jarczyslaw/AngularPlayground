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
  }

  updatePost(): void {
  }

  deletePost(): void {
  }

  changePost(): void {
  }
}
