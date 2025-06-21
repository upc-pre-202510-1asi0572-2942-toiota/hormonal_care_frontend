import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/v1/medicalAppointment';

  constructor(private http: HttpClient) {}

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

}
