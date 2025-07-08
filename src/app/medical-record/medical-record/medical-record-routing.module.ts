import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordComponent } from './medical-record.component';
import { MedicalRecordMedicalTestsComponent } from '../medical-record-medical-tests/medical-record-medical-tests.component';
import { MedicalRecordPatientHistoryComponent } from '../medical-record-patient-history/medical-record-patient-history.component';
import { MedicalRecordDiagnosisAndTreatmentComponent } from '../medical-record-diagnosis-and-treatment/medical-record-diagnosis-and-treatment.component';
import { MedicalRecordExternalReportsComponent } from '../medical-record-external-reports/medical-record-external-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalRecordComponent,
    children: [
      { path: 'patient-history', component: MedicalRecordPatientHistoryComponent },
      { path: 'medical-tests', component: MedicalRecordMedicalTestsComponent },
      { path: 'diagnosis-and-treatment', component: MedicalRecordDiagnosisAndTreatmentComponent },
      { path: 'external-reports', component: MedicalRecordExternalReportsComponent },
      { path: '', redirectTo: 'patient-history', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule {}
