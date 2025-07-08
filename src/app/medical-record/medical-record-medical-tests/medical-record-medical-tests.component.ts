import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

export interface MedicalTest {
  id: number;
  date: string;
  testType: string;
  result?: string;
}

@Component({
  selector: 'app-medical-record-medical-tests',
  standalone: false,
  templateUrl: './medical-record-medical-tests.component.html',
  styleUrls: ['./medical-record-medical-tests.component.css']
})
export class MedicalRecordMedicalTestsComponent implements OnInit, OnDestroy {
  medicalTests: MedicalTest[] = [];
  loading = false; // Estático, así que no necesitamos loading
  patientId!: number;
  private routeSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscribirse a cambios en los parámetros de la ruta
    const parentRoute = this.route.parent?.parent;
    if (parentRoute) {
      this.routeSubscription = parentRoute.params.subscribe(params => {
        if (params['id']) {
          this.patientId = Number(params['id']);
          this.loadMedicalTests();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private loadMedicalTests(): void {
    // Datos estáticos de ejemplo
    this.medicalTests = [
      {
        id: 1,
        date: '2024-01-15',
        testType: 'Glucose Tolerance Test',
        result: 'Normal'
      },
      {
        id: 2,
        date: '2024-01-08',
        testType: 'Fasting Blood Glucose',
        result: 'Elevated'
      },
      {
        id: 3,
        date: '2023-12-20',
        testType: 'HbA1c Test',
        result: 'Normal'
      },
      {
        id: 4,
        date: '2023-12-10',
        testType: 'Random Blood Glucose',
        result: 'Normal'
      },
      {
        id: 5,
        date: '2023-11-25',
        testType: 'Postprandial Glucose Test',
        result: 'Slightly Elevated'
      }
    ];
  }

  onDownload(test: MedicalTest): void {
    // Función estática para simular descarga
    console.log(`Downloading report for ${test.testType} from ${test.date}`);
    // Aquí iría la lógica real de descarga cuando esté lista en el backend
  }

  getResultClass(result?: string): string {
    if (!result) return '';

    const lowerResult = result.toLowerCase();
    if (lowerResult.includes('normal')) {
      return 'result-normal';
    } else if (lowerResult.includes('elevated') || lowerResult.includes('high')) {
      return 'result-elevated';
    } else if (lowerResult.includes('low')) {
      return 'result-low';
    }
    return 'result-other';
  }
}
