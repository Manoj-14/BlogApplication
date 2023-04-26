import { Component, OnInit } from '@angular/core';
import { BlogAppService } from '../services/blog-app.service';
import { blog } from './blog/blog.interface';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css'],
})
export class ViewBlogsComponent implements OnInit {
  constructor(private blogService: BlogAppService) {}
  ngOnInit(): void {
    this.fetchposts();
  }

  blogs: blog[] = [];
  error: string;
  fetching: boolean = true;

  fetchposts() {
    this.blogService.fetchposts().subscribe(
      (response) => {
        this.blogs = response;
        this.fetching = false;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }
}
