import { Component, Input } from '@angular/core';
import { BlogService } from '../../../core/services/blog/blog.service';
import { Blog } from '../../models/blog.modal';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-blog-components',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-components.html',
  styleUrl: './blog-components.css',
})
export class BlogComponents {
  blogs$!: Observable<Blog[]>;
  latestBlogs$!: Observable<Blog[]>;
  constructor(private blogService: BlogService) {}
  @Input() viewMode: 'all' | 'latest' = 'all';
  ngOnInit(): void {
    this.blogs$ = this.blogService.getBlogs();

    this.latestBlogs$ = this.blogs$.pipe(map((blogs) => blogs.slice(0, 3)));
  }
}
