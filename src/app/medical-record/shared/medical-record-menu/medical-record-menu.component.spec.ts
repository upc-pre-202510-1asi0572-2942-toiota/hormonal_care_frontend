import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordMenuComponent } from './medical-record-menu.component';

describe('MedicalRecordMenuComponent', () => {
  let component: MedicalRecordMenuComponent;
  let fixture: ComponentFixture<MedicalRecordMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicalRecordMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
