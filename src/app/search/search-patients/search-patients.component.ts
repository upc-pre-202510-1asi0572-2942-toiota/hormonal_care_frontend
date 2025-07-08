import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


import { SearchPatientsService } from '../search-services/search-patients.service';
import { Patient } from '../search-models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SearchPatientsComponent implements OnInit {
  searchQuery: string = '';
  profiles: Patient[] = [];
  loading: boolean = false;
  routeIsActive: any;

  constructor(
    private searchService: SearchPatientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.loading = true;
      this.searchService.searchProfilesByName(this.searchQuery).subscribe(
        (results) => {
          this.profiles = results;
          this.loading = false;
        },
        (error) => {
          console.error('Error searching profiles:', error);
          this.profiles = [];
          this.loading = false;
        }
      );
    } else {
      this.profiles = [];
    }
  }

  onCardClick(patient: Patient) {
    this.router.navigate(['/patients/medical-record', patient.id]);
  }
}
