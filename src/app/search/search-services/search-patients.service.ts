import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../search-models/patient';

@Injectable({
  providedIn: 'root'
})
export class SearchPatientsService {
  private apiUrl = '/api/v1/medical-record/patient';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching patients:', error);
        return throwError(() => new Error('Failed to fetch patients. Please try again later.'));
      })
    );
  }
}
