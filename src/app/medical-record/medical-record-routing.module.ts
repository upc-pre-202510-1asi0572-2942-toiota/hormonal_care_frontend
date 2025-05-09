import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { MedicalRecordPatientHistoryComponent } from './medical-record-patient-history/medical-record-patient-history.component';
import { MedicalRecordDiagnosisTreatmentComponent } from './medical-record-diagnosis-treatment/medical-record-diagnosis-treatment.component';
import { MedicalRecordMedicalTestsComponent } from './medical-record-medical-tests/medical-record-medical-tests.component';
import { MedicalRecordExternalReportsComponent } from './medical-record-external-reports/medical-record-external-reports.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalRecordComponent,
    children: [
      { path: '', redirectTo: 'patient-history', pathMatch: 'full' },
      { path: 'patient-history', component: MedicalRecordPatientHistoryComponent },
      { path: 'diagnosis-treatment', component: MedicalRecordDiagnosisTreatmentComponent },
      { path: 'medical-tests', component: MedicalRecordMedicalTestsComponent },
      { path: 'external-reports', component: MedicalRecordExternalReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule {}
