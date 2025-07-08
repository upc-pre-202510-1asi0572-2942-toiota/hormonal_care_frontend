import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {
  MedicalRecordPatientProfileComponent
} from '../medical-record-patient-profile/medical-record-patient-profile.component';
import {MedicalRecordMenuComponent} from '../shared/medical-record-menu/medical-record-menu.component';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  imports: [
    MedicalRecordPatientProfileComponent,
    MedicalRecordMenuComponent,
    RouterOutlet
  ],
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  patientId!: number;
  medicalRecordId!: number;

  ngOnInit(): void {
    // Obtener el ID desde la ruta padre (patients/medical-record/:id)
    this.patientId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.medicalRecordId = this.patientId;
    // Usar medicalRecordId para los endpoints
  }

  constructor(private route: ActivatedRoute) {}
}
