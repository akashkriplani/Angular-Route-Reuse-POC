import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit, OnDestroy {
  @Input() public feature: string;
  reload = true;
  public mySubscription: any;
  public content: any;
  public showData = true;

  constructor(private routeSnapshot: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent(): void {
    this.content = this.routeSnapshot.snapshot.data ? this.routeSnapshot.snapshot.data.feature : null;

    this.mySubscription = this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showData = false;
      this.content = this.routeSnapshot.snapshot.data ? this.routeSnapshot.snapshot.data.feature : null;
      setTimeout(() => {
        this.showData = true;
      }, 0);
    });
  }

  public ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

}
