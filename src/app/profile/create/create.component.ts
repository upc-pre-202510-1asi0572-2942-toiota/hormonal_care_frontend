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
  selectedFile: File | null = null;

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
        birthday: ['', Validators.required],
        typeOfBlood: ['', Validators.required],
        personalHistory: ['', Validators.required],
        familyHistory: ['', Validators.required],
        doctorId: ['', Validators.required]
      });
    }
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  isFileSelected(): boolean {
    return this.selectedFile !== null;
  }
  onSubmit(): void {
    if (this.profileForm.invalid || !this.selectedFile) return;

    // Formatear la fecha como ISO string
    const birthdayISO = new Date(this.profileForm.value.birthday + 'T00:00:00Z').toISOString();

    // Crear el objeto que contiene todos los datos
    const basePayload: any = {
      ...this.profileForm.value,
      birthday: birthdayISO,
      userId: this.userId,
      image: this.selectedFile
    };

    if (this.role === 'ROLE_DOCTOR') {
      const payload: DoctorProfile = {
        firstName: basePayload.firstName,
        lastName: basePayload.lastName,
        gender: basePayload.gender,
        phoneNumber: basePayload.phoneNumber,
        birthday: basePayload.birthday,
        userId: basePayload.userId,
        image: basePayload.image,
        professionalIdentificationNumber: basePayload.professionalIdentificationNumber,
        subSpecialty: basePayload.subSpecialty
      };

      this.profileService.createDoctorProfile(payload).subscribe({
        next: () => this.router.navigate(['/home']),
        error: err => console.error('Error creando perfil doctor:', err)
      });
    } else {
      const payload: PatientProfile = {
        firstName: basePayload.firstName,
        lastName: basePayload.lastName,
        gender: basePayload.gender,
        phoneNumber: basePayload.phoneNumber,
        birthday: basePayload.birthday,
        userId: basePayload.userId,
        image: basePayload.image,
        typeOfBlood: basePayload.typeOfBlood,
        personalHistory: basePayload.personalHistory,
        familyHistory: basePayload.familyHistory,
        doctorId: Number(basePayload.doctorId)
      };

      this.profileService.createPatientProfile(payload).subscribe({
        next: () => this.router.navigate(['/home']),
        error: err => console.error('Error creando perfil paciente:', err)
      });
    }
  }

}

