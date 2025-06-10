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
export class SidebarComponent {
  patients = ['Patient 1', 'Patient 2', 'Patient 3', 'Patient 4'];
}
