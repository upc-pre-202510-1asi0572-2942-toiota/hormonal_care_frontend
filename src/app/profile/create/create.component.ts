import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorProfile, PatientProfile, ProfileService} from '../../shared/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  profileForm!: FormGroup;
  role!: string;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Leer rol y userId
    this.role = localStorage.getItem('role')!;
    this.userId = Number(localStorage.getItem('userId'));

    // Inicializar form según rol
    if (this.role === 'ROLE_DOCTOR') {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        image: ['', Validators.required],
        birthday: ['', Validators.required],
        professionalIdentificationNumber: ['', Validators.required],
        subSpecialty: ['', Validators.required]
      });
    } else {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        image: ['', Validators.required],
        birthday: ['', Validators.required],
        typeOfBlood: ['', Validators.required],
        personalHistory: ['', Validators.required],
        familyHistory: ['', Validators.required],
        doctorId: ['', Validators.required]
      });
    }
  }

  onSubmit(): void {
    if (this.profileForm.invalid) return;

    if (this.role === 'ROLE_DOCTOR') {
      const payload: DoctorProfile = {
        ...this.profileForm.value,
        userId: this.userId
      };

      this.profileService.createDoctorProfile(payload).subscribe({
        next: () => this.router.navigate(['/home']),
        error: err => console.error('Error creando perfil doctor:', err)
      });

    } else {
      const payload: PatientProfile = {
        ...this.profileForm.value,
        userId: this.userId
      };

      this.profileService.createPatientProfile(payload).subscribe({
        next: () => this.router.navigate(['/home']),
        error: err => console.error('Error creando perfil paciente:', err)
      });
    }
  }
}

