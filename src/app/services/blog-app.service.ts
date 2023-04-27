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
            content: resp[key].content.replace(/\s\s+/g, ' '),
            id: resp[key].id,
          });
        }
        return blogArr;
      })
    );
  }

  DeletePost(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  updatePost(updatedPost: blog) {
    return this.httpClient.put(`${this.url}/${updatedPost.id}`, updatedPost);
  }
}
