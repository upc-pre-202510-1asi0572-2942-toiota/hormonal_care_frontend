import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import { TodaysPatientsComponent } from '../../appointment/pages/todays-patients/todays-patients.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,

  imports: [
    CommonModule,
    TodaysPatientsComponent,
    MatSidenavModule
  ],
})
export class HomeComponent implements OnInit {
  patientsToday: any[] = [];
  private _patient: String | undefined;

  isDoctor: boolean = false;

  constructor(private patientService: CommonService, private authService: AuthService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const parsed = JSON.parse(user);
      this.isDoctor = parsed.role === 'DOCTOR';
      if (!this.isDoctor) {
        // Si tienes lógica para otros roles, mantenla aquí
        // Por ejemplo:
        // this.patientService.getPatientsByDoctor(otroId).subscribe(patients => {
        //   this.patientsToday = patients;
        // });
      }
    }
  }

  abrirMeet(patient: String | undefined) {
    this._patient = patient;
  }
}
