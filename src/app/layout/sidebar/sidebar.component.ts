import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent { }
