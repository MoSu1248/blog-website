import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Themebtn } from '../../shared/components/themebtn/themebtn';
import { MobileMenu } from '../../shared/components/mobile-menu/mobile-menu';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, NgOptimizedImage, Themebtn, MobileMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
