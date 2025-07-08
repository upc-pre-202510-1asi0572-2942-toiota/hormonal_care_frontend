// src/app/medical-record/medical-record-patient-history/medical-record-patient-history.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalRecordService, PatientData } from '../services/medical-record.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medical-record-patient-history',
  templateUrl: './medical-record-patient-history.component.html',
  styleUrls: ['./medical-record-patient-history.component.css'],
  imports: [CommonModule]
})
export class MedicalRecordPatientHistoryComponent implements OnInit, OnDestroy {
  patientData: PatientData | null = null;
  loading = true;
  error: string | null = null;
  patientId!: number;
  private routeSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private medicalRecordService: MedicalRecordService
  ) {}

  ngOnInit(): void {
    // Suscribirse a cambios en los parámetros de la ruta
    const parentRoute = this.route.parent?.parent;
    if (parentRoute) {
      this.routeSubscription = parentRoute.params.subscribe(params => {
        if (params['id']) {
          this.patientId = Number(params['id']);
          this.loadPatientData();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private loadPatientData(): void {
    if (this.patientId) {
      this.loading = true;
      this.error = null;

      this.medicalRecordService.getPatientData(this.patientId).subscribe({
        next: (data) => {
          this.patientData = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar los datos del paciente';
          this.loading = false;
          console.error('Error loading patient data:', error);
        }
      });
    }
  }
}
