import { Component , HostListener, OnInit} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    CommonModule,

  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

   isMobile = false;

  ngOnInit() {
    this.checkScreen();
  }

 @HostListener('window:resize')
onResize() {
  this.checkScreen();
}

  checkScreen() {
    this.isMobile = window.innerWidth < 768; // você pode ajustar o breakpoint
  }
}
