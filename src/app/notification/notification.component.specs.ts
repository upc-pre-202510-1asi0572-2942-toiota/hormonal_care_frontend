import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationComponent],
      imports: [CommonModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of notifications', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const notificationItems = compiled.querySelectorAll('li');
    expect(notificationItems.length).toBe(component.notifications.length);
  });

  it('should display the correct notification text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const notificationItems = compiled.querySelectorAll('li');
    notificationItems.forEach((item, index) => {
      expect(item.textContent).toContain(component.notifications[index]);
    });
  });
});
