import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CommonService} from '../../shared/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [
    NgForOf,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  patients: string[] = ['Patient 1', 'Patient 2', 'Patient 3', 'Patient 4'];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    const doctorId = 0; // Reemplaza con el ID del doctor correspondiente
    this.commonService.getPatientsByDoctorId(doctorId).subscribe((response) => {
      if (response.length === 0) {
        this.patients = ['Patient 1', 'Patient 2', 'Patient 3', 'Patient 4'];
      } else {
        this.patients = [];
        response.forEach(patient => {
          this.commonService.getProfileById(patient.profileId).subscribe(profile => {
            this.patients.push(profile.fullName);
          });
        });
      }
    });
  }
}
