import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { CommonModule } from '@angular/common';

interface TodaysAppointmentCard {
  id: number;
  title: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  doctorName: string;
  patientName: string;
  description: string;
}

@Component({
  selector: 'app-todays-patients',
  standalone: true,
  templateUrl: './todays-patients.component.html',
  styleUrl: './todays-patients.component.css',
  imports: [CommonModule]
})
export class TodaysPatientsComponent implements OnInit {
  appointments: TodaysAppointmentCard[] = [];
  loading = true;
  error: string | null = null;

  constructor(private appointmentService: AppointmentService, private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentDoctorId().subscribe(doctorId => {
      if (doctorId) {
        this.fetchTodaysAppointments(doctorId);
      } else {
        this.loading = false;
        this.error = 'No se pudo obtener el doctorId.';
      }
    });
  }

  fetchTodaysAppointments(doctorId: number) {
    this.loading = true;
    this.error = null;
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    this.appointmentService.getAppointmentsByDoctor(doctorId, this.appointmentService.getToken() || '').subscribe({
      next: (appointments) => {
        // Filtrar solo las citas del día actual
        const todays = appointments.filter((appt: any) => appt.eventDate === todayStr);
        // Para cada cita, obtener doctor y paciente
        Promise.all(todays.map(async (appt: any) => {
          const doctorName = await this.getDoctorName(appt.doctorId);
          const patientName = await this.getPatientName(appt.patientId);
          return {
            id: appt.id,
            title: appt.title,
            eventDate: appt.eventDate,
            startTime: appt.startTime,
            endTime: appt.endTime,
            doctorName,
            patientName,
            description: appt.description
          };
        })).then((cards) => {
          this.appointments = cards;
          this.loading = false;
        });
      },
      error: (err) => {
        this.error = 'Error al cargar citas: ' + err.message;
        this.loading = false;
      }
    });
  }

  getDoctorName(doctorId: number): Promise<string> {
    return this.http.get<any>(`http://localhost:8080/api/v1/doctor/${doctorId}`)
      .toPromise()
      .then(res => res.fullName)
      .catch(() => 'Desconocido');
  }

  getPatientName(patientId: number): Promise<string> {
    return this.http.get<any>(`http://localhost:8080/api/v1/patient/${patientId}`)
      .toPromise()
      .then(res => res.fullName)
      .catch(() => 'Desconocido');
  }
}
