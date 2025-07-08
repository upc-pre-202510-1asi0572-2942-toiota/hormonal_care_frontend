import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PatientData {
  id: number;
  fullName: string;
  image: string | null;
  gender: string;
  phoneNumber: string;
  birthday: string;
  typeOfBlood: string;
  personalHistory: string | null;
  familyHistory: string | null;
  doctorId: number;
  profileId: number;
}

export interface Treatment {
  description: string;
  medicalRecordId: number;
}

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  getPatientData(patientId: number): Observable<PatientData> {
    return this.http.get<PatientData>(`${this.baseUrl}/patient/${patientId}`);
  }

  getTreatments(medicalRecordId: number): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.baseUrl}/medical-record/treatments/medicalRecordId/${medicalRecordId}`);
  }
}
