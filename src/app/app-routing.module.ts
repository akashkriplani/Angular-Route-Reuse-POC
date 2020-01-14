import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  { path: 'posts',
    component: WrapperComponent,
    data: { feature: PostComponent },
    runGuardsAndResolvers: 'always',
    children: [
      { path: ':id', component: PostDetailComponent }
    ]
  },
  { path: 'users', component: UsersComponent},
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  entryComponents: [PostComponent]
})
export class AppRoutingModule { }
