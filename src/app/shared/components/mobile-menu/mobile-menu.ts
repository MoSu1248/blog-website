import { Component } from '@angular/core';
import { MenuIcon } from '../../icons/menu-icon/menu-icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [MenuIcon, RouterLinkActive, RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
