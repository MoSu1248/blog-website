import { Component } from '@angular/core';
import { SocialLinks } from '../../shared/components/social-links/social-links';

@Component({
  selector: 'app-about',
  imports: [SocialLinks],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
