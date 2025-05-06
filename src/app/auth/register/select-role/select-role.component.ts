import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RegistrationService} from '../../../services/registration.service';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-select-role',
  standalone: false,
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.css'
})
export class SelectRoleComponent {
  selectedRole: 'ROLE_DOCTOR' | 'ROLE_PATIENT' | null = null;

  constructor(
    private registrationService: RegistrationService,
    private authService: AuthService,
    private router: Router
  ) {}

  selectRole(role: 'ROLE_DOCTOR' | 'ROLE_PATIENT') {
    this.selectedRole = role;
  }

  submit() {
    const username = this.registrationService.getUsername();
    const password = this.registrationService.getPassword();

    if (!username || !password || !this.selectedRole) {
      alert('Faltan datos para registrar.');
      return;
    }

    const userData = {
      username,
      password,
      roles: [this.selectedRole]
    };

    this.authService.register(userData).subscribe({
      next: () => {
        alert('Usuario registrado con éxito');
        this.registrationService.clearData(); // Limpiar después del registro
        this.router.navigate(['/']); // Redirige a la ruta que desees
      },
      error: err => {
        console.error(err);
        alert('Error al registrar usuario');
      }
    });
  }
}
