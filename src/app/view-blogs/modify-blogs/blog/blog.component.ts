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
  textarea: HTMLTextAreaElement = document.querySelector('.modify-textarea');

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
}
