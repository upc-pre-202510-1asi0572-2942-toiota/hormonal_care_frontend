import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../shared/validators/password-match.validator';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value
      };

      this.registrationService.setUserData(userData.username,userData.password);

      // Redirigir a la pantalla para seleccionar rol
      this.router.navigate(['/select-role']);
    }
  }
}
