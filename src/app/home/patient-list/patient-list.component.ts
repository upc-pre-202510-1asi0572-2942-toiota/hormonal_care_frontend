import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../../shared/common.service';
import {MatList, MatListItem} from '@angular/material/list';
import {MatButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/input';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  imports: [
    MatListItem,
    MatFormField,
    MatButton,
    MatList,
    NgForOf,
    FormsModule
  ],
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];
  filtered: any[] = [];
  search = '';
  doctorId = Number(localStorage.getItem('userId'));

  constructor(private patientService: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.patientService.getPatientsByDoctor(this.doctorId).subscribe(data => {
      this.patients = this.filtered = data;
    });
  }

  filter() {
    const s = this.search.toLowerCase();
    this.filtered = this.patients.filter(p => p.patientRecordId.toLowerCase().includes(s));
  }

  agendarCita(patientId: number) {
    this.router.navigate(['/appointment/create'], { queryParams: { patientId } });
  }
}
