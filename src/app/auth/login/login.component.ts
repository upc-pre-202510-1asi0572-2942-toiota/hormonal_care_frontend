import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ProfileService} from '../../shared/profile.service';

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
    private profileService: ProfileService
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

          this.profileService.getProfileByUserId(userId).subscribe({
            next: (profile) => {
              // Perfil encontrado, redirige al home
              this.router.navigate(['/home']);
            },
            error: (err) => {
              if (err.status === 404) {
                // Perfil no encontrado, redirige a crear perfil
                this.router.navigate(['/profile/create']);
              } else {
                // Otro error
                console.error('Error al obtener el perfil:', err);
              }
            }
          });
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
