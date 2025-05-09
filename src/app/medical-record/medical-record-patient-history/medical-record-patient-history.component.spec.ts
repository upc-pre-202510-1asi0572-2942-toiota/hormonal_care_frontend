import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordPatientHistoryComponent } from './medical-record-patient-history.component';

describe('MedicalRecordPatientHistoryComponent', () => {
  let component: MedicalRecordPatientHistoryComponent;
  let fixture: ComponentFixture<MedicalRecordPatientHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordPatientHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordPatientHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
