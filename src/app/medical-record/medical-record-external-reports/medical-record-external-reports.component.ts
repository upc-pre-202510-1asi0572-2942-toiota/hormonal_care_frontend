import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-medical-record-external-reports',
  templateUrl: './medical-record-external-reports.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./medical-record-external-reports.component.css']
})
export class MedicalRecordExternalReportsComponent {
  reports = [
    { date: '01/10/2023' },
    { date: '15/09/2023' },
    { date: '20/08/2023' },
    { date: '10/07/2023' }
  ];
}
