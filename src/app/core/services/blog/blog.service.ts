import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Blog } from '../../../shared/models/blog.modal';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly JSON_URL = 'data/data.json';
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.JSON_URL).pipe(
      map((blogs) => {
        console.log('Raw data from JSON:', blogs);
        return blogs.map((blog: any) => ({
          ...blog,
          publishedAt: new Date(blog.publishedAt),
        }));
      }),
    );
  }
}
