import { Component, OnInit } from '@angular/core';
import { MedicalRecordService } from '../services/medical-record.service';

@Component({
  selector: 'app-medical-record-patient-history',
  templateUrl: './medical-record-patient-history.component.html',
  styleUrls: ['./medical-record-patient-history.component.css']
})
export class MedicalRecordPatientHistoryComponent implements OnInit {
  personalHistory: string = 'Cargando...';
  familyHistory: string = 'Cargando...';

  constructor(private medicalRecordService: MedicalRecordService) {}

  ngOnInit(): void {
    this.loadPatientHistory();
  }

  private loadPatientHistory(): void {
    this.medicalRecordService.getPatientHistory().subscribe((data) => {
      this.personalHistory = data.personalHistory || 'No hay información disponible.';
      this.familyHistory = data.familyHistory || 'No hay información disponible.';
    });
  }
}
