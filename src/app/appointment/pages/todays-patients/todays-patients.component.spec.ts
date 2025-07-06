import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysPatientsComponent } from './todays-patients.component';

describe('TodaysPatientsComponent', () => {
  let component: TodaysPatientsComponent;
  let fixture: ComponentFixture<TodaysPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysPatientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
