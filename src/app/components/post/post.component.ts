import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';
import { RouterEvent, NavigationEnd } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private router: Router,
    private postService: PostService) { }

  public posts: Post[];

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = true;
      }
    });
  }

  handlePostClick(id: number): void {
    this.router.navigate(['/posts/'+ id]);
  }

  reloadPage(id: number): void {
    this.router.navigate(['/posts/']);
  }

}
