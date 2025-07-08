import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchPatientsComponent } from '../search/search-patients/search-patients.component';

@Component({
  selector: 'app-patients-page',
  standalone: true,
  imports: [CommonModule, SearchPatientsComponent, RouterOutlet],
  template: `
    <div style="display: flex; height: 100%;">
      <div style="width: 350px; border-right: 1px solid #eee;">
        <app-search-patients></app-search-patients>
      </div>
      <div style="flex: 1; padding: 16px;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class PatientsPageComponent {}
