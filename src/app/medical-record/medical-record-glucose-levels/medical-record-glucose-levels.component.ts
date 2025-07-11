import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-medical-record-external-reports',
  templateUrl: './medical-record-glucose-levels.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./medical-record-glucose-levels.component.css']
})
export class MedicalRecordGlucoseLevelsComponent implements OnInit {
  patientId!: Number; // ID del paciente dinámico
  emergencyMessage!: string; // Mensaje de emergencia
  glucoseLevels: any[] = []; // Niveles de glucosa por fecha
  insulinLevels: any[] = [];
  today: Date = new Date(); // Fecha actual
  formattedDate= this.today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID desde la ruta padre (patients/medical-record/:id)
    this.patientId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    if (!this.patientId) {
      console.error('El parámetro patientId no está definido en la ruta.');
      return;
    }
    this.postGlucoseData();
    this.monitorGlucose();
    this.fetchGlucoseByDate(this.formattedDate);
  }


  monitorGlucose(): void {
    const url = `https://hormonalcarebackend-9c81ad662b45.herokuapp.com/api/v1/patient/${this.patientId}/monitor-glucose`;
    this.http.get<string>(url).subscribe((response) => {
      this.emergencyMessage = response; // Asigna el mensaje de emergencia
    });
  }

  fetchGlucoseByDate(date: string): void {
    const url = `https://hormonalcarebackend-9c81ad662b45.herokuapp.com/api/v1/patient/${this.patientId}/glucose/${date}`;
    this.http.get<any[]>(url).subscribe((response) => {
      this.glucoseLevels = response; // Asigna los niveles de glucosa obtenidos
      this.insulinLevels = this.calculateInsulinHistory(response);
    });
  }

  postGlucoseData(): void {
    const url = `https://hormonalcarebackend-9c81ad662b45.herokuapp.com/api/v1/patient/${this.patientId}/fetch-glucose-from-blynk`;
    this.http.post(url, {}).subscribe({
      next: () => {
        console.log('Datos de glucosa obtenidos exitosamente.');
      },
      error: (error) => {
        console.error('Error al obtener datos de glucosa:', error);
      }
    });
  }

  calculateInsulinHistory(glucoseLevels: any[]): any[] {
    const insulinHistory: any[] = [];
    const targetGlucose = 100; // Nivel de glucosa objetivo
    const ISF = 40; // Factor de sensibilidad a la insulina

    glucoseLevels.forEach((level) => {
      if (level.glucoseLevel > 200) { // Si el nivel de glucosa supera los 200 mg/dL
        const correctiveInsulin = (level.glucoseLevel - targetGlucose) / ISF; // Fórmula de insulina correctiva
        insulinHistory.push({
          time: level.time,
          insulinUnits: `${correctiveInsulin.toFixed(2)} U` // Redondear a 2 decimales
        });
      }
    });

    return insulinHistory;
  }
}
