import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { blog } from '../../blog/blog.interface';
import { BlogAppService } from 'src/app/services/blog-app.service';

@Component({
  selector: 'app-blog-modify',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class ModifyBlogComponent implements OnInit {
  constructor(private blogService: BlogAppService) {}
  ngOnInit(): void {}

  @Input()
  blogInp: blog;

  @Output()
  postDeleted = new EventEmitter<{ deleted: boolean }>();

  editContent: boolean = false;
  modifyBtn: string = 'Modify Post';

  onDeletePost() {
    this.blogService.DeletePost(this.blogInp.id).subscribe(() => {
      this.postDeleted.emit({ deleted: true });
    });
  }
  onEditText() {
    if (this.editContent == true) {
      this.modifyBtn = 'Modify Post';
      this.blogService.updatePost(this.blogInp).subscribe((resp) => {});
    } else {
      this.modifyBtn = 'Save Poast';
      const textarea: HTMLTextAreaElement = document.querySelector(
        `#txt${this.blogInp.id}`
      );
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
    this.editContent = !this.editContent;
  }
}
