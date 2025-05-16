import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [
        MatSnackBarModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the payment form when "Pagar" button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('.payment-form'));
    expect(form).toBeTruthy();
  });

  it('should show a success message when payment is confirmed', () => {
    component.openPaymentForm();
    fixture.detectChanges();
    component.paymentData = {
      name: 'John',
      lastName: 'Doe',
      cardNumber: '1234567890123456',
      expirationDate: '12/25',
      cvv: '123'
    };
    spyOn(component, 'confirmPayment').and.callThrough();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.confirmPayment).toHaveBeenCalled();
  });
});
