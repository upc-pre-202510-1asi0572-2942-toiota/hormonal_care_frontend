import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {
  private apiUrl = 'http://localhost:8080/api/v1/patient';

  constructor(private http: HttpClient) {}

  getMedicalRecordById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/medical-record/${id}`);
  }
}
