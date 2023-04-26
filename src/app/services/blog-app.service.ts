import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../view-blogs/blog/blog.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogAppService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:3000/posts';

  createPost(postData: blog) {
    return this.httpClient.post(this.url, postData);
  }

  fetchposts() {
    return this.httpClient.get(this.url).pipe(
      map((resp) => {
        const blogArr = [];
        for (const key in resp) {
          blogArr.push({
            title: resp[key].title,
            content: resp[key].content,
            id: resp[key].id,
          });
        }
        return blogArr;
      })
    );
  }
}
