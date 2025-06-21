import { Component, OnInit, Input } from '@angular/core';
import { DoctorProfile } from '../../models/doctor-profile';

@Component({
  selector: 'app-doctor-profile',
  standalone: false,
  templateUrl: './doctor-profile.component.html',
  styleUrl: './doctor-profile.component.css'
})
export class DoctorProfileComponent implements OnInit {
  @Input() doctor!: DoctorProfile;

  ngOnInit(): void {}
}
