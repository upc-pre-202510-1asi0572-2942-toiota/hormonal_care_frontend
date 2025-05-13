import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  imports: [
    NgForOf,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavModule
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  patients = [
    'Ana María Vallejoz',
    'Mario Fernandez',
    'Jair Loaiza Herrera',
    'Esteban Pizarro',
    'Rodrigo Irigoyen',
    'Gabriel Santos Gonzales'
  ];
}
