import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from '../../shared/public/sidebar/sidebar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,

  imports: [
    MatCard,
    MatButton,
    NgForOf,
    MatSidenavContainer,
    MatCardTitle,
    MatCardContent,
    SidebarComponent,
    MatSidenav,
    MatSidenavModule
  ],
})
export class HomeComponent implements OnInit {
  patientsToday: any[] = [];
  doctorId = Number(localStorage.getItem('userId'));
  private _patient: String | undefined;

  constructor(private patientService: CommonService) {}

  ngOnInit(): void {
    this.patientService.getPatientsByDoctor(this.doctorId).subscribe(patients => {
      this.patientsToday = patients;
    });
  }

  abrirMeet(patient: String | undefined) {
    this._patient = patient;

  }
}
