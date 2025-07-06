import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
// Interfaces para los bodies
export interface DoctorProfile {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  image: File;
  birthday: string;              // ISO string
  userId: number;
  professionalIdentificationNumber: number;
  subSpecialty: string;
}
export interface ProfileData {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  birthday: string; // ISO string
  userId: number;
  file: File;
}

export interface PatientProfile {
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  image: File|null;
  birthday: string;              // ISO string
  userId: number;
  typeOfBlood: string;
  personalHistory: string;
  familyHistory: string;
  doctorId: number|null;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080';


  getProfileByUserId(userId: number) {
    return this.http.get(this.apiUrl+`/api/v1/profile/userId/${userId}`);
  }
  /** Crea perfil de doctor */
  createDoctorProfile(data: DoctorProfile): Observable<DoctorProfile> {
    const formData = new FormData();
    formData.append('file', data.image); // Aquí se manda el archivo

    // Construir los query params
    let params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('gender', data.gender)
      .set('phoneNumber', data.phoneNumber)
      .set('birthday', data.birthday)
      .set('userId', data.userId.toString())
      .set('professionalIdentificationNumber', data.professionalIdentificationNumber.toString())
      .set('subSpecialty', data.subSpecialty);

    return this.http.post<DoctorProfile>(
        `${this.apiUrl}/api/v1/doctor/doctor`,
      formData,
      { params }
    );
  }

  /** Crea perfil de paciente */
  createPatientProfile(data: PatientProfile): Observable<any> {
    const formData = new FormData();



    // Construir los query params
    let params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('gender', data.gender)
      .set('phoneNumber', data.phoneNumber)
      .set('birthday', data.birthday)
      .set('userId', data.userId.toString())
      .set('typeOfBlood', data.typeOfBlood)
      .set('personalHistory', data.personalHistory)
      .set('familyHistory', data.familyHistory)


    return this.http.post<any>(
      `${this.apiUrl}/api/v1/patient`,
      formData,
      { params }
    );
  }
  createProfile(data: ProfileData): Observable<any> {
    const formData = new FormData();
    formData.append('file', data.file); // el archivo binario

    // construir los query parameters
    let params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('gender', data.gender)
      .set('phoneNumber', data.phoneNumber)
      .set('birthday', data.birthday)
      .set('userId', data.userId.toString());

    return this.http.post<any>(
      `${this.apiUrl}/api/v1/profile`,
      formData,
      { params }
    );
  }

  createAppointment(data: any) {
    return this.http.post(this.apiUrl+"/api/v1/medicalAppointment", data);
  }
  getPatientsByDoctor(doctorId: number) {
    return this.http.get<any[]>(this.apiUrl+`/api/v1/patient/doctor/${doctorId}`);
  }

  getPatientsByDoctorId(doctorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/patient/doctor/${doctorId}`);
  }
  getProfileById(profileId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/profile/${profileId}`);
  }
}
