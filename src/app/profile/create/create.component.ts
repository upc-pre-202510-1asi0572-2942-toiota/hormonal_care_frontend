import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DoctorProfile, PatientProfile, CommonService} from '../../shared/common.service';
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
    private profileService: CommonService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Leer rol y userId
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.role = user.role;
      this.userId = user.id;

    }

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
      const birthdayISO = new Date(this.profileForm.value.birthday + 'T00:00:00Z').toISOString();

      const payload: DoctorProfile = {
        ...this.profileForm.value,
        userId: this.userId,
        birthday: birthdayISO, // Fecha en formato ISO
        };
      console.log('Error creando perfil paciente:',payload)
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

