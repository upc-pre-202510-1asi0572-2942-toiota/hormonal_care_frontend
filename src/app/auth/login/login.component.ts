import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private profileService: CommonService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          const userId = response.id;
          const userRole = response.role;

          if (userRole === 'ROLE_DOCTOR') {
            // Consultar datos del doctor
            this.authService.getDoctorByUserId(userId).subscribe({
              next: (doctor) => {
                // Guardar el nombre completo del doctor en localStorage o en el servicio si es necesario
                localStorage.setItem('doctorFullName', doctor.fullName);
                // Redirigir al home
                this.router.navigate(['/home']);
              },
              error: (err) => {
                console.error('Error al obtener datos del doctor:', err);
              }
            });
          } else if (userRole === 'ROLE_PATIENT') {
            // Por ahora, permite el acceso normal a home para pacientes
            this.router.navigate(['/home']);
          } else {
            // Otros roles, redirige a login o maneja según sea necesario
            this.router.navigate(['/login']);
          }
        },
        error: (error) => {
          console.error('Login fallido:', error);
        }
      });
    }
  }

  loginWithGoogle(): void {
    console.log('Login with Google');
  }
}
