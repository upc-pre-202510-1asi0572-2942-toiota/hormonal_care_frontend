import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { DoctorProfile } from '../../models/doctor-profile';
import { PatientProfile } from '../../models/patient-profile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  doctorProfile?: DoctorProfile;
  patientProfile?: PatientProfile;
  userRole: string | null = null;
  userId: number | null = null;

  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUserValue;
    this.userRole = currentUser?.role || null;
    this.userId = currentUser?.id || null;

    if (this.userRole === 'ROLE_DOCTOR' && this.userId) {
      this.http.get<DoctorProfile>(`https://hormonalcarebackend-9c81ad662b45.herokuapp.com/api/v1/doctor/by-user/${this.userId}`)
        .subscribe(profile => this.doctorProfile = profile);
    } else if (this.userRole === 'ROLE_PATIENT' && this.userId) {
      this.http.get<PatientProfile>(`https://hormonalcarebackend-9c81ad662b45.herokuapp.com/api/v1/patient/by-user/${this.userId}`)
        .subscribe(profile => this.patientProfile = profile);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
