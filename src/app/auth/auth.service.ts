import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthResponse {
  id: number;
  username: string;
  token: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  register(userData: { username: string; password: string; roles: string[] }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/authentication/sign-up`, userData);
  }

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<AuthResponse>(`${this.apiUrl}/api/v1/authentication/sign-in`, credentials, { headers }).pipe(
      tap(response => {
        console.log("error a revisar: ",response);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('currentUser', JSON.stringify({
          id: response.id,
          username: response.username,
          role: response.role
        }));
        this.currentUserSubject.next({
          id: response.id,
          username: response.username,
          role: response.role
        });
      })
    );
  }
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
