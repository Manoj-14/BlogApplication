import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blog } from '../view-blogs/blog/blog.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogAppService {
  constructor(private httpClient: HttpClient) {}

  URL: string = 'http://localhost:3000/posts';
  API_KEY = '6d207e02198a847aa98d0a2a901485a5';
  FILE_UPLOAD_URL = `https://freeimage.host/${this.API_KEY}/1/upload`;

  createPost(postData: blog) {
    return this.httpClient.post(this.URL, postData);
  }

  fetchposts() {
    return this.httpClient.get(this.URL).pipe(
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
    return this.httpClient.delete(`${this.URL}/${id}`);
  }

  updatePost(updatedPost: blog) {
    return this.httpClient.put(`${this.URL}/${updatedPost.id}`, updatedPost);
  }

  uploadFile(file: File) {
    let formData: { image: File } = { image: file };
    return this.httpClient.post(this.FILE_UPLOAD_URL, formData);
  }
}
