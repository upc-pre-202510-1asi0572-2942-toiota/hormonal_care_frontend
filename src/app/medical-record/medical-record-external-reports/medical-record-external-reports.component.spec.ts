import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordExternalReportsComponent } from './medical-record-external-reports.component';

describe('MedicalRecordExternalReportsComponent', () => {
  let component: MedicalRecordExternalReportsComponent;
  let fixture: ComponentFixture<MedicalRecordExternalReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordExternalReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordExternalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
