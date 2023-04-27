import { Component, EventEmitter, Input, Output } from '@angular/core';
import { blog } from '../../blog/blog.interface';
import { BlogAppService } from 'src/app/services/blog-app.service';

@Component({
  selector: 'app-blog-modify',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class ModifyBlogComponent {
  constructor(private blogService: BlogAppService) {}

  @Input()
  blogInp: blog;

  @Output()
  postDeleted = new EventEmitter<{ deleted: boolean }>();

  editContent: boolean = false;

  onDeletePost() {
    this.blogService.DeletePost(this.blogInp.id).subscribe(() => {
      this.postDeleted.emit({ deleted: true });
    });
  }
  onEditText() {
    if (this.editContent == true) {
      this.blogService.updatePost(this.blogInp).subscribe((resp) => {
        console.log(this.blogInp + ':' + resp);
      });
    }
    this.editContent = !this.editContent;
  }

  initPostValues = (postData: blog) => {};
}
