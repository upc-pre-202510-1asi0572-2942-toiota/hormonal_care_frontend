import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { MedicalRecordPatientProfileComponent } from './shared/medical-record-patient-profile/medical-record-patient-profile.component';
import { MedicalRecordMenuComponent } from './shared/medical-record-menu/medical-record-menu.component';
import { MedicalRecordRoutingModule } from './medical-record-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MedicalRecordRoutingModule,
    MedicalRecordComponent, // Importa el componente standalone
    MedicalRecordPatientProfileComponent, // Importa el componente standalone
    MedicalRecordMenuComponent // Importa el componente standalone
  ],
  exports: [
    CommonModule,
    MedicalRecordComponent
  ]
})
export class MedicalRecordModule {}
