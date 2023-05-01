import { Component } from '@angular/core';
import { blog } from '../blog/blog.interface';
import { NgForm } from '@angular/forms';
import { BlogAppService } from '../../services/blog-app.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent {
  contextLen: string = '';
  blogAdded: boolean = false;
  title: string;
  file: File = null;

  constructor(private blogService: BlogAppService) {}

  onChange(event) {
    this.file = event.target.files[0];
  }

  onBlogSubmit(blogData: blog, form: NgForm) {
    console.log(blogData);
    this.blogService.createPost(blogData).subscribe(() => {
      this.title = blogData.title;
      this.blogAdded = true;
      form.reset();
      this.contextLen = '';
      setTimeout(() => {
        this.blogAdded = false;
      }, 5000);
    });
  }
}
