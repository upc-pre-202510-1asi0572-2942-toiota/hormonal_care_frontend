import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [dayGridPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: []
  };

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointmentsForCurrentDoctor().subscribe({
      next: (appointments) => {
        // Mapear los datos al formato que FullCalendar espera
        this.calendarOptions = {
          ...this.calendarOptions,
          events: appointments.map((appt: any) => ({
            id: appt.id,
            title: appt.title,
            start: appt.eventDate + 'T' + appt.startTime,
            end: appt.eventDate + 'T' + appt.endTime,
            color: appt.color || undefined,
            description: appt.description
          }))
        };
      },
      error: (err) => {
        // Manejo de error simple
        console.error('Error al cargar citas:', err);
      }
    });
  }
}
