import { Component } from '@angular/core';
import { BlogService } from '../../core/services/blog/blog.service';
import { Blog } from '../../shared/models/blog.modal';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-page',
  imports: [AsyncPipe, MarkdownModule],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.css',
})
export class BlogPage {
  blogs$!: Observable<Blog[]>;
  blog$!: Observable<Blog | undefined>;
  slug: string | null = null;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');

    this.blogs$ = this.blogService.getBlogs();

    this.blog$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const slug = params.get('slug');
        return this.blogService.getBlogs().pipe(map((blogs) => blogs.find((b) => b.slug === slug)));
      }),
    );
  }
}
