import { Component } from '@angular/core';
import { BlogComponents } from '../../shared/components/blog-components/blog-components';

@Component({
  selector: 'app-blog',
  imports: [BlogComponents],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
