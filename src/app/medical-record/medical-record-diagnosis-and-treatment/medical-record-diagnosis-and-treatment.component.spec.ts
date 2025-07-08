import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordDiagnosisAndTreatmentComponent } from './medical-record-diagnosis-and-treatment.component';

describe('MedicalRecordDiagnosisAndTreatmentComponent', () => {
  let component: MedicalRecordDiagnosisAndTreatmentComponent;
  let fixture: ComponentFixture<MedicalRecordDiagnosisAndTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordDiagnosisAndTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordDiagnosisAndTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
