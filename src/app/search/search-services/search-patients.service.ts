import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../search-models/patient';

@Injectable({
  providedIn: 'root'
})
export class SearchPatientsService {
  private apiUrl = 'http://localhost:8080/api/v1/medical-record/patient/search';

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching patients:', error);
        return throwError(() => new Error('Failed to fetch patients. Please try again later.'));
      })
    );
  }

  searchProfilesByName(name: string): Observable<Patient[]> {
    const searchUrl = `${this.apiUrl}?name=${name}`;
    return this.http.get<Patient[]>(searchUrl).pipe(
      catchError(error => {
        console.error('Error searching profiles:', error);
        if (error.status === 200 && typeof error.error === 'string') {
          console.error('Response is not JSON:', error.error);
        }
        return throwError(() => new Error('Failed to search profiles. Please try again later.'));
      })
    );
  }
}
