import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from './medical-record.component';
import { MedicalRecordPatientProfileComponent } from '../medical-record-patient-profile/medical-record-patient-profile.component';
import { MedicalRecordMenuComponent } from '../shared/medical-record-menu/medical-record-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MedicalRecordComponent,
    MedicalRecordPatientProfileComponent,
    MedicalRecordMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class MedicalRecordModule { }

