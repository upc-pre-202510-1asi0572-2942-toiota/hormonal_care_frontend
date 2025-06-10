import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  patients = ['Patient 1', 'Patient 2', 'Patient 3', 'Patient 4'];
}
