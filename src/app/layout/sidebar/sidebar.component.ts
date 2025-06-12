import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  userRole: string | null = null;

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      this.userRole = parsedUser.role;
    }
  }
  getPatientsLink(): string {
    return this.userRole === 'ROLE_DOCTOR' ? '/patients' : '/doctors';
  }

  getPatientsText(): string {
    return this.userRole === 'ROLE_DOCTOR' ? 'Patients' : 'Doctors';
  }
  constructor(private commonService: CommonService) {}
  isLightMode: boolean = true;

  toggleBackgroundColor(): void {
    this.isLightMode = !this.isLightMode;
    const sidebar = document.querySelector('.app-sidebar') as HTMLElement;
    sidebar.style.backgroundColor = this.isLightMode ? '#ffffff' : '#333333'; // Fondo blanco o gris oscuro

    const links = sidebar.querySelectorAll('a, i') as NodeListOf<HTMLElement>;
    links.forEach(link => {
      link.style.color = this.isLightMode ? '#000000' : '#ffffff'; // Texto e íconos negro o blanco
    });

    const footer = sidebar.querySelector('footer p') as HTMLElement;
    footer.style.color = this.isLightMode ? '#000000' : '#ffffff'; // Texto del footer negro o blanco
  }

}
