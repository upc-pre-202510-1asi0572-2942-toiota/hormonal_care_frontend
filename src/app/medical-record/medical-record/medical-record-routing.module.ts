import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalRecordComponent } from './medical-record.component';
import { MedicalRecordMedicalTestsComponent } from '../medical-record-medical-tests/medical-record-medical-tests.component';
import { MedicalRecordPatientHistoryComponent } from '../medical-record-patient-history/medical-record-patient-history.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalRecordComponent,
    children: [
      { path: 'medical-tests', component: MedicalRecordMedicalTestsComponent },
      { path: 'patient-history', component: MedicalRecordPatientHistoryComponent },
      { path: '', redirectTo: 'patient-history', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRecordRoutingModule {}
