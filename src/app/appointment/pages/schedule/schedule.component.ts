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
    stickyHeaderDates: true,
    events: []
  };

  // Definición de colores predeterminados
  private readonly colorMap: { [key: string]: string } = {
    'Rojo Tomate': '#D50000',
    'Rosa Chicle': '#E67C73',
    'Mandarina': '#F4511E',
    'Amarillo Huevo': '#F6BF26',
    'Verde Esmeralda': '#33B679',
    'Verde Musgo': '#0B8043',
    'Azul Turquesa': '#039BE5',
    'Azul Arándano': '#3F51B5',
    'Lavanda': '#7986CB',
    'Morado Intenso': '#8E24AA',
    'Grafito': '#616161'
  };

  // Función para convertir cualquier formato de color recibido a formato web hexadecimal (#xxxxxx, minúsculas)
  private normalizeColor(color: string): string {
    if (!color) return '#039be5'; // Azul turquesa por defecto
    let hex = color.trim().toLowerCase();
    if (hex.startsWith('0x')) {
      // Quitar '0x' y los dos siguientes caracteres (ff)
      hex = hex.slice(4);
    } else if (hex.startsWith('ff')) {
      // Quitar 'ff' inicial
      hex = hex.slice(2);
    } else if (hex.startsWith('#')) {
      // Ya es formato web
      hex = hex.slice(1);
    }
    // Validar que tenga 6 caracteres hexadecimales
    if (/^[0-9a-f]{6}$/.test(hex)) {
      return `#${hex}`;
    }
    // Si el color original ya era #xxxxxx válido
    if (/^#[0-9a-f]{6}$/.test(color.trim().toLowerCase())) {
      return color.trim().toLowerCase();
    }
    // Si nada coincide, color por defecto
    return '#039be5';
  }

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
            color: this.normalizeColor(appt.color),
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
