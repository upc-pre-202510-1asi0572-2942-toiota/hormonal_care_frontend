import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService, Patient } from '../../services/patient.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medical-record-patient-profile',
  templateUrl: './medical-record-patient-profile.component.html',
  styleUrls: ['./medical-record-patient-profile.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class MedicalRecordPatientProfileComponent implements OnInit, OnDestroy {
  @Input() patientId?: number;
  patient?: Patient; // <-- Agrega esta línea
  private routeSub?: Subscription;
  private patientSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const id = +params['id'];
      if (this.patientSub) this.patientSub.unsubscribe();
      this.patientSub = this.patientService.getPatientById(id).subscribe(patient => {
        this.patient = patient;
      });
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
    this.patientSub?.unsubscribe();
  }
}
