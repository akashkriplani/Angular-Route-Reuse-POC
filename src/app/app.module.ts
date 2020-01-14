import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { UserService } from 'src/app/services/user.service';
import { UsersComponent } from './components/users/users.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    UsersComponent,
    WrapperComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
