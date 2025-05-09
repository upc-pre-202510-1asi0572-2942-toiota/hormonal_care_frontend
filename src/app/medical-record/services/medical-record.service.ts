import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {
  private apiUrl = 'https://api.example.com/patient-history'; // Cambia esta URL por la de tu endpoint

  constructor(private http: HttpClient) {}

  getPatientHistory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
