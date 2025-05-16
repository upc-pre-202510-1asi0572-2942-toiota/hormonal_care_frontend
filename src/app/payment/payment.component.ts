import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  standalone: false
})
export class PaymentComponent {
  showPaymentForm = false;
  amountToPay = 100; // Monto a pagar (puedes cambiarlo dinámicamente)

  paymentData = {
    name: '',
    lastName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(private snackBar: MatSnackBar) {}

  openPaymentForm() {
    this.showPaymentForm = true;
  }

  confirmPayment() {
    // Aquí puedes agregar lógica para procesar el pago
    this.snackBar.open('Se ha completado la transacción', 'Cerrar', {
      duration: 3000
    });
    this.showPaymentForm = false;
  }
}
