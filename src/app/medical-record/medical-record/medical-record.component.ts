import { Component } from '@angular/core';
import {
  MedicalRecordPatientProfileComponent
} from '../shared/medical-record-patient-profile/medical-record-patient-profile.component';
import {MedicalRecordMenuComponent} from '../shared/medical-record-menu/medical-record-menu.component';
import {RouterOutlet} from '@angular/router';

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
export class MedicalRecordComponent {}
