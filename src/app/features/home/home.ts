import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';
import { BlogComponents } from '../../shared/components/blog-components/blog-components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [SocialLinks, BlogComponents, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
