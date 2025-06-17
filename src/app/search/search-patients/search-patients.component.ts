import { Component, OnInit } from '@angular/core';
import { SearchPatientsService } from '../search-services/search-patients.service';
import { Patient } from '../search-models/patient';

@Component({
  selector: 'app-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.css']
})
export class SearchPatientsComponent implements OnInit {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];

  constructor(private searchPatientsService: SearchPatientsService) {}

  ngOnInit(): void {
    this.searchPatientsService.getPatients().subscribe((data: Patient[]) => {
      this.patients = data;
      this.filteredPatients = data; // Initialize filteredPatients with all patients
    });
  }

  onSearch(searchText: string): void {
    if (this.patients) { // Verificar que patients no sea nulo
      this.filteredPatients = this.patients.filter(patient =>
        patient.fullName && patient.fullName.toLowerCase().includes(searchText.toLowerCase()) // Verificar que fullName no sea nulo
      );
    }
  }
}