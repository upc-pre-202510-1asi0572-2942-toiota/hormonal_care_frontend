import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordDiagnosisTreatmentComponent } from './medical-record-diagnosis-treatment.component';

describe('MedicalRecordDiagnosisTreatmentComponent', () => {
  let component: MedicalRecordDiagnosisTreatmentComponent;
  let fixture: ComponentFixture<MedicalRecordDiagnosisTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordDiagnosisTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordDiagnosisTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
