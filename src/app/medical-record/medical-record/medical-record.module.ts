import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from './medical-record.component';
import { MedicalRecordPatientProfileComponent } from '../medical-record-patient-profile/medical-record-patient-profile.component';
import { MedicalRecordMenuComponent } from '../shared/medical-record-menu/medical-record-menu.component';
import { RouterModule } from '@angular/router';
import { MedicalRecordMedicalTestsComponent } from '../medical-record-medical-tests/medical-record-medical-tests.component';

@NgModule({
  declarations: [
    MedicalRecordMedicalTestsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MedicalRecordComponent,
    MedicalRecordPatientProfileComponent,
    MedicalRecordMenuComponent
  ]
})
export class MedicalRecordModule { }

