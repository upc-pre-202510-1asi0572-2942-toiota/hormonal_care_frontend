import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-medical-record-menu',
  templateUrl: './medical-record-menu.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./medical-record-menu.component.css']
})
export class MedicalRecordMenuComponent {
  menuItems = [
    { label: 'Patient History', route: 'patient-history' },
    { label: 'Diagnosis & Treatment', route: 'diagnosis-treatment' },
    { label: 'Medical Tests', route: 'medical-tests' },
    { label: 'External Reports', route: 'external-reports' }
  ];
}
