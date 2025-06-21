import { Component, OnInit, Input } from '@angular/core';
import { PatientProfile } from '../../models/patient-profile';

@Component({
  selector: 'app-patient-profile',
  standalone: false,
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.css'
})
export class PatientProfileComponent implements OnInit {
  @Input() patient!: PatientProfile;

  ngOnInit(): void {}
}
