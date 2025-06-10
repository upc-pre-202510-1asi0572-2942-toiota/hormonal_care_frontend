import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent
  ],
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent { }
