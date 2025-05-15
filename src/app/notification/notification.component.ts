import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  standalone: false
})
export class NotificationComponent implements OnInit {
  notifications = [
    'Recordatorio de tomar pastillas...',
    'Se cargó archivo externo con éxito',
    'Siguiente sesión en 15 minutos'
  ];

  constructor() { }
  ngOnInit(): void { }

}
