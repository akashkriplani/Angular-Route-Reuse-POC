import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from 'src/app/components/users/users.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent, runGuardsAndResolvers: 'always' },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: 'users', component: UsersComponent},
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }