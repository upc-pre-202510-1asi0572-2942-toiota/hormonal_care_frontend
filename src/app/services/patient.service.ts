import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient {
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

@Injectable({ providedIn: 'root' })
export class PatientService {
  private apiUrl = 'http://localhost:8080/api/v1/patient';

  constructor(private http: HttpClient) {}

  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }
}
