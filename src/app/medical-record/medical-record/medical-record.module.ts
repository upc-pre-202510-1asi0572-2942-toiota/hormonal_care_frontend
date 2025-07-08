import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from './medical-record.component';
import { MedicalRecordPatientProfileComponent } from '../medical-record-patient-profile/medical-record-patient-profile.component';
import { MedicalRecordMenuComponent } from '../shared/medical-record-menu/medical-record-menu.component';
import { RouterModule } from '@angular/router';
import { MedicalRecordMedicalTestsComponent } from '../medical-record-medical-tests/medical-record-medical-tests.component';
import { MedicalRecordRoutingModule } from './medical-record-routing.module';
import { MedicalRecordPatientHistoryComponent } from '../medical-record-patient-history/medical-record-patient-history.component';
import { MedicalRecordDiagnosisAndTreatmentComponent } from '../medical-record-diagnosis-and-treatment/medical-record-diagnosis-and-treatment.component';
import { MedicalRecordExternalReportsComponent } from '../medical-record-external-reports/medical-record-external-reports.component';

@NgModule({
  declarations: [
    MedicalRecordMedicalTestsComponent,
    MedicalRecordDiagnosisAndTreatmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MedicalRecordRoutingModule,
    MedicalRecordComponent,
    MedicalRecordPatientProfileComponent,
    MedicalRecordMenuComponent,
    MedicalRecordPatientHistoryComponent,
    MedicalRecordExternalReportsComponent
  ]
})
export class MedicalRecordModule { }
