import { Component } from '@angular/core';
import { SunIcon } from '../../icons/sun-icon/sun-icon';

@Component({
  selector: 'app-themebtn',
  imports: [SunIcon],
  templateUrl: './themebtn.html',
  styleUrl: './themebtn.css',
})
export class Themebtn {
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');

    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }
}
