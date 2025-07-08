import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordMedicalTestsComponent } from './medical-record-medical-tests.component';

describe('MedicalRecordMedicalTestsComponent', () => {
  let component: MedicalRecordMedicalTestsComponent;
  let fixture: ComponentFixture<MedicalRecordMedicalTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordMedicalTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordMedicalTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
