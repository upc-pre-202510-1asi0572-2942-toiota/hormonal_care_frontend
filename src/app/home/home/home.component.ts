import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../shared/profile.service';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    MatListItem,
    MatCard,
    MatList,
    MatButton
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patientsToday: any[] = [];
  doctorId = Number(localStorage.getItem('userId'));
  private _patient: String | undefined;

  constructor(private patientService: ProfileService) {}

  ngOnInit(): void {
    this.patientService.getPatientsByDoctor(this.doctorId).subscribe(patients => {
      this.patientsToday = patients;
    });
  }

  abrirMeet(patient: String | undefined) {
    this._patient = patient;

  }
}
