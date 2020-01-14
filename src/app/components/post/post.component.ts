import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private router: Router, private http: HttpClient,
    private postService: PostService) { }

  public posts: Post[];
  public unsubscribe: any;
  public showDetails = true;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  handlePostClick(id: number): void {
    this.router.navigate(['/posts/' + id]);
    this.showDetails = true;
  }

  loadPosts(): void {
    this.showDetails = false;
    this.router.navigate(['/posts/']);
  }
}
