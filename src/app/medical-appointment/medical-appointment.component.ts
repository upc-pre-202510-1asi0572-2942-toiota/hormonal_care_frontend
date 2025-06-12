import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../shared/common.service';

@Component({
  selector: 'app-medical-appointment',
  standalone: false,
  templateUrl: './medical-appointment.component.html',
  styleUrl: './medical-appointment.component.css'
})
export class MedicalAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  doctorId = Number(localStorage.getItem('userId'));
  patientId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private appointmentService: CommonService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      eventDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      color: ['#2196F3']
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.patientId = Number(params['patientId']);
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const data = {
        ...this.appointmentForm.value,
        doctorId: this.doctorId,
        patientId: this.patientId
      };

      this.appointmentService.createAppointment(data).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}
