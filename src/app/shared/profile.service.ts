import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// Interfaces para los bodies
export interface DoctorProfile {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  image: string;
  birthday: string;              // ISO string
  userId: number;
  professionalIdentificationNumber: number;
  subSpecialty: string;
}

export interface PatientProfile {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  image: string;
  birthday: string;              // ISO string
  userId: number;
  typeOfBlood: string;
  personalHistory: string;
  familyHistory: string;
  doctorId: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080';
  getProfileByUserId(userId: number) {
    return this.http.get(this.apiUrl+`/api/v1/profile/profile/userId/${userId}`);
  }
  /** Crea perfil de doctor */
  createDoctorProfile(data: DoctorProfile): Observable<DoctorProfile> {
    return this.http.post<DoctorProfile>(
      `${this.apiUrl}/doctor/doctor`,
      data
    );
  }

  /** Crea perfil de paciente */
  createPatientProfile(data: PatientProfile): Observable<PatientProfile> {
    return this.http.post<PatientProfile>(
      `${this.apiUrl}/medical-record/patient`,
      data
    );
  }
}
