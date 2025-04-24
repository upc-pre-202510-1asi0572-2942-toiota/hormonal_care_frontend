import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {passwordMatchValidator} from '../shared/validators/password-match.validator';


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
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Aquí iría la lógica para registrar al usuario
      console.log('Form values:', this.registerForm.value);

      // Simulamos registro exitoso y redirigimos
      this.router.navigate(['/home']);
    }
  }
}
