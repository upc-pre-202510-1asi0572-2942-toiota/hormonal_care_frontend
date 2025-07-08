import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicalRecordService, Treatment } from '../services/medical-record.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-medical-record-diagnosis-and-treatment',
  templateUrl: './medical-record-diagnosis-and-treatment.component.html',
  styleUrls: ['./medical-record-diagnosis-and-treatment.component.css'],
  imports: [CommonModule]
})
export class MedicalRecordDiagnosisAndTreatmentComponent implements OnInit, OnDestroy {
  treatments: Treatment[] = [];
  loading = true;
  error: string | null = null;
  medicalRecordId!: number;
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
          this.medicalRecordId = Number(params['id']);
          this.loadTreatments();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private loadTreatments(): void {
    if (this.medicalRecordId) {
      this.loading = true;
      this.error = null;

      this.medicalRecordService.getTreatments(this.medicalRecordId).subscribe({
        next: (data) => {
          this.treatments = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error loading treatments data';
          this.loading = false;
          console.error('Error loading treatments:', error);
        }
      });
    }
  }
}
