import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordPatientProfileComponent } from './medical-record-patient-profile.component';

describe('MedicalRecordPatientProfileComponent', () => {
  let component: MedicalRecordPatientProfileComponent;
  let fixture: ComponentFixture<MedicalRecordPatientProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordPatientProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
