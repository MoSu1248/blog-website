import { Component } from '@angular/core';
import { SunIcon } from '../../icons/sun-icon/sun-icon';
import { CommonModule } from '@angular/common';
import { MoonIcon } from '../../icons/moon-icon/moon-icon';

@Component({
  selector: 'app-themebtn',
  imports: [SunIcon, CommonModule, MoonIcon],
  templateUrl: './themebtn.html',
  styleUrl: './themebtn.css',
})
export class Themebtn {
  theme: 'light' | 'dark' = 'light';

  ngOnInit() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (saved) {
      this.theme = saved;
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme = prefersDark ? 'dark' : 'light';
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';
    this.theme = next;

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }
}
