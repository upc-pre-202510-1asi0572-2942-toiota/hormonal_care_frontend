import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/v1/medicalAppointment';

  constructor(private http: HttpClient, private authService: AuthService) {}

  createAppointment(appointment: Appointment, token: string): Observable<any> {
    const body = {
      eventDate: appointment.eventDate.toISOString().split('T')[0],
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      title: appointment.title,
      description: appointment.description,
      doctorId: appointment.doctorId,
      patientId: appointment.patientId,
      color: appointment.color
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.baseUrl, body, { headers });
  }

  getAppointmentsByDoctor(doctorId: number, token: string): Observable<any> {
    const url = `${this.baseUrl}/medicalAppointments/doctor/${doctorId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, { headers });
  }

  getCurrentUserId(): number | null {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return JSON.parse(user).id;
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getDoctorIdByUserId(userId: number, token: string): Observable<any> {
    const url = `http://localhost:8080/api/v1/doctor/by-user/${userId}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, { headers });
  }

  getAppointmentsForCurrentDoctor(): Observable<any> {
    const userId = this.getCurrentUserId();
    const token = this.getToken();
    if (!userId || !token) {
      throw new Error('Usuario o token no encontrado');
    }
    return this.getDoctorIdByUserId(userId, token).pipe(
      // Se asume que la respuesta tiene la propiedad 'id' para el doctorId
      switchMap((doctor: any) => this.getAppointmentsByDoctor(doctor.id, token))
    );
  }

}
