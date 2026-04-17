import { Component, Input } from '@angular/core';
import { SocialLink } from '../../models/social-link.model';
import { XIcon } from '../../../shared/icons/x-icon/x-icon';
import { GithubIcon } from '../../../shared/icons/github-icon/github-icon';
import { LinkedinIcon } from '../../../shared/icons/linkedin-icon/linkedin-icon';
import { FrontendMentorIcon } from '../../../shared/icons/frontend-mentor-icon/frontend-mentor-icon';
import { NgClass, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-social-links',
  imports: [NgClass, NgComponentOutlet],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks {
  ICON_MAP = {
    github: GithubIcon,
    x: XIcon,
    linkedin: LinkedinIcon,
    'frontend-mentor': FrontendMentorIcon,
  };

  @Input() variant: 'default' | 'outline' = 'default';
  readonly iconMap = this.ICON_MAP;

  links: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/suhail', icon: 'github' },
    { name: 'X', url: 'https://x.com/suhail', icon: 'x' },
    { name: 'linkedIn', url: 'https://x.com/suhail', icon: 'linkedin' },
    { name: 'frontend-mentor', url: 'https://x.com/suhail', icon: 'frontend-mentor' },
  ];
}
