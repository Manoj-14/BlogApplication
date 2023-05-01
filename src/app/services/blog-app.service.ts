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
  FILE_UPLOAD_URL = `http://localhost:3000/images`;

  createPost(postData: blog) {
    return this.httpClient.post(this.URL, postData);
  }

  fetchposts() {
    return this.httpClient.get(this.URL).pipe(
      map((resp) => {
        const blogArr = [];
        for (const key in resp) {
          blogArr.push(resp[key]);
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
    let formData = new FormData();

    const reader = new FileReader();
    reader.onload = () => {
      const imageBase64 = reader.result as string;

      const payload = {
        image: imageBase64,
      };
    };

    return this.httpClient.post(this.FILE_UPLOAD_URL, formData);
  }
}
