import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../shared/common.service';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    MatListItem,
    MatCard,
    MatList,
    MatButton,
    NgForOf
  ],
  styleUrls: ['./home.component.css']
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
