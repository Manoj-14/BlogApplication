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

  btnStatus: string = 'Read More';

  contentLen: number = 500;

  @Output()
  postDeleted = new EventEmitter<{ deleted: boolean }>();

  editContent: boolean = false;
  modifyBtn: string = 'Modify Post';
  postSaved: boolean = false;

  onDeletePost() {
    this.blogService.DeletePost(this.blogInp.id).subscribe(() => {
      this.postDeleted.emit({ deleted: true });
    });
  }
  onEditText() {
    if (this.editContent == true) {
      this.modifyBtn = 'Modify Post';
      this.blogService.updatePost(this.blogInp).subscribe((resp) => {
        this.postSaved = true;
        setTimeout(() => {
          this.postSaved = false;
        }, 3000);
      });
      this.editContent = false;
    } else {
      this.modifyBtn = 'Save Poast';
      this.editContent = true;
    }
  }

  onExpandMore() {
    if (this.contentLen == 500) {
      this.contentLen = this.blogInp.content.length;
      this.btnStatus = 'Read Less';
    } else {
      this.contentLen = 500;
      this.btnStatus = 'Read More';
    }
  }

  onConcelEdit() {
    this.editContent = false;
    this.modifyBtn = 'Modify Post';
  }

  onTextareaLoad() {
    const textarea: HTMLTextAreaElement = document.querySelector(
      `#txt${this.blogInp.id}`
    );
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
