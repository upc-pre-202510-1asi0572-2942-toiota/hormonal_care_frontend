import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

interface Patient {
  id: number;
  fullName: string;
  image: string;
}

interface AddAppointmentData {
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
}

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddAppointmentComponent implements OnInit {
  form: FormGroup;
  patients: Patient[] = [];
  colors = [
    { name: 'Rojo Tomate', value: '#D50000' },
    { name: 'Rosa Chicle', value: '#E67C73' },
    { name: 'Mandarina', value: '#F4511E' },
    { name: 'Amarillo Huevo', value: '#F6BF26' },
    { name: 'Verde Esmeralda', value: '#33B679' },
    { name: 'Verde Musgo', value: '#0B8043' },
    { name: 'Azul Turquesa', value: '#039BE5' },
    { name: 'Azul Arándano', value: '#3F51B5' },
    { name: 'Lavanda', value: '#7986CB' },
    { name: 'Morado Intenso', value: '#8E24AA' },
    { name: 'Grafito', value: '#616161' },
  ];
  jitsiLink: string = '';
  doctorId: number | null = null;
  loadingPatients = true;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddAppointmentData
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      date: [data.date, Validators.required],
      startTime: [data.startTime, Validators.required],
      endTime: [data.endTime, Validators.required],
      patientId: [null, Validators.required],
      color: [this.colors[6].value, Validators.required], // Azul Turquesa por defecto
    });
  }

  ngOnInit(): void {
    this.generateJitsiLink();
    this.authService.getCurrentDoctorId().subscribe(doctorId => {
      this.doctorId = doctorId;
      if (doctorId) {
        this.http.get<Patient[]>(`http://localhost:8080/api/v1/patient/doctor/${doctorId}`).subscribe(patients => {
          this.patients = patients;
          this.loadingPatients = false;
        }, () => this.loadingPatients = false);
      } else {
        this.loadingPatients = false;
      }
    });
  }

  generateJitsiLink() {
    const random = Math.random().toString(36).substring(2, 12);
    const title = this.form.get('title')?.value || 'meeting';
    this.jitsiLink = `https://meet.jit.si/${title.replace(/\s+/g, '-')}-${random}`;
  }

  onTitleChange() {
    this.generateJitsiLink();
  }

  submit() {
    if (this.form.invalid || !this.doctorId) return;
    const { title, date, startTime, endTime, patientId, color } = this.form.value;
    const appointment = {
      eventDate: date,
      startTime,
      endTime,
      title,
      description: this.jitsiLink,
      doctorId: this.doctorId,
      patientId,
      color
    };
    this.http.post('http://localhost:8080/api/v1/medicalAppointment', appointment).subscribe({
      next: () => this.dialogRef.close(true),
      error: () => alert('Error al crear la cita')
    });
  }

  close() {
    this.dialogRef.close(false);
  }
}
