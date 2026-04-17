import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Themebtn } from '../../shared/components/themebtn/themebtn';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink, NgOptimizedImage, Themebtn],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
