import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter } from '@angular/material/core';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home/home.component';
// Services and Interceptors
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {SelectRoleComponent} from './auth/register/select-role/select-role.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { CreateComponent } from './profile/create/create.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatSidenavContainer} from '@angular/material/sidenav';
import { NotFoundComponent } from './shared/public/not-found/not-found.component';
import { ScheduleComponent } from './appointment/pages/schedule/schedule.component';
import { DoctorProfileComponent } from './profile/components/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from './profile/components/patient-profile/patient-profile.component';
import { MedicalRecordComponent } from './medical-record/medical-record/medical-record.component';
import { MedicalRecordPatientProfileComponent } from './medical-record/medical-record-patient-profile/medical-record-patient-profile.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';
import {SearchPatientsComponent} from './search/search-patients/search-patients.component';
import { MedicalRecordMenuComponent } from './medical-record/shared/medical-record-menu/medical-record-menu.component';
import { RouterModule } from '@angular/router';
import { DiagnosisAndTreatmentComponent } from './medical-record/diagnosis-and-treatment/diagnosis-and-treatment.component';
import { MedicalRecordDiagnosisAndTreatmentComponent } from './medical-record/medical-record-diagnosis-and-treatment/medical-record-diagnosis-and-treatment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SelectRoleComponent,
    ProfileComponent,
    CreateComponent,
    NotFoundComponent,
    DoctorProfileComponent,
    PatientProfileComponent,
    PatientProfileComponent,
    DiagnosisAndTreatmentComponent,
    MedicalRecordDiagnosisAndTreatmentComponent
  ],
  imports: [
    BrowserModule,
    SearchPatientsComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterOutlet,
    CommonModule,
    // Angular Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    PatientListComponent,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    HomeComponent,
    MatSidenavContainer,
    MatMomentDateModule,
    ScheduleComponent,
    MedicalRecordComponent,
    PatientsPageComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: DateAdapter, useClass: MatMomentDateModule }

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
