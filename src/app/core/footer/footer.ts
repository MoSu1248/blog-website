import { Component } from '@angular/core';
import { XIcon } from '../../shared/icons/x-icon/x-icon';
import { GithubIcon } from '../../shared/icons/github-icon/github-icon';
import { LinkedinIcon } from '../../shared/icons/linkedin-icon/linkedin-icon';
import { FrontendMentorIcon } from '../../shared/icons/frontend-mentor-icon/frontend-mentor-icon';

@Component({
  selector: 'app-footer',
  imports: [XIcon, GithubIcon, LinkedinIcon, FrontendMentorIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
