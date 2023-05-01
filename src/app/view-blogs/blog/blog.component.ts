import { Component, EventEmitter, Input, Output } from '@angular/core';
import { blog } from './blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @Input()
  blogInp: blog;
  btnStatus: string = 'Read More';

  contentLen: number = 500;

  onExpandMore() {
    if (this.contentLen == 500) {
      this.contentLen = this.blogInp.content.length;
      this.btnStatus = 'Read Less';
    } else {
      this.contentLen = 500;
      this.btnStatus = 'Read More';
    }
  }
}
