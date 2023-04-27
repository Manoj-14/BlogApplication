import { Component, OnInit } from '@angular/core';
import { BlogAppService } from 'src/app/services/blog-app.service';
import { blog } from '../blog/blog.interface';

@Component({
  selector: 'app-modify-blogs',
  templateUrl: './modify-blogs.component.html',
  styleUrls: ['./modify-blogs.component.css'],
})
export class ModifyBlogsComponent implements OnInit {
  constructor(private blogService: BlogAppService) {}
  ngOnInit(): void {
    this.fetchPosts();
  }

  dbPosts: blog[] = [];
  error: string;
  fetching: boolean = true;

  fetchPosts() {
    this.blogService.fetchposts().subscribe(
      (response) => {
        this.fetching = false;
        this.dbPosts = response;
      },
      (err) => {
        this.error = err.message;
      }
    );
  }
  onPostDelete() {
    this.fetchPosts();
  }
}
