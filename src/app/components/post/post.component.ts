import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../interfaces/post';
import { Router } from '@angular/router';
import { RouterEvent, NavigationEnd } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { PostService } from '../../services/post.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private postService: PostService) { }

  public posts: Post[];
  public unsubscribe: any;

  ngOnInit(): void {
    this.getPosts();
    this.unsubscribe = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        if (this.router.getCurrentNavigation().extras.state &&
            this.router.getCurrentNavigation().extras.state.shouldReload) {
          this.router.onSameUrlNavigation = 'reload';
        }
      }
    });
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  handlePostClick(id: number): void {
    this.router.navigate(['/posts/'+ id]);
  }

  reloadPage(id: number): void {
    this.router.navigate(['/posts/'],  { state: { shouldReload: true }});
  }

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe.complete();
      this.unsubscribe.unsubscribe();
    }
  }

}
