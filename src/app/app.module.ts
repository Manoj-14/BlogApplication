import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './view-blogs/add-blog/add-blog.component';
import { FormsModule } from '@angular/forms';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { BlogComponent } from './view-blogs/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentLengthPipe } from './pipes/content-length.pipe';
import { ModifyBlogsComponent } from './view-blogs/modify-blogs/modify-blogs.component';
import { ModifyBlogComponent } from './view-blogs/modify-blogs/blog/blog.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'AddBlog', component: AddBlogComponent },
  { path: 'ViewBlogs', component: ViewBlogsComponent },
  { path: 'ModifyBlogs', component: ModifyBlogsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
    ViewBlogsComponent,
    BlogComponent,
    ContentLengthPipe,
    ModifyBlogsComponent,
    ModifyBlogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
