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

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './home/home/home.component';

// Services and Interceptors
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {SelectRoleComponent} from './auth/register/select-role/select-role.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MedicalRecordComponent } from './medical-record/medical-record/medical-record.component';
import { MedicalRecordPatientProfileComponent } from './medical-record/shared/medical-record-patient-profile/medical-record-patient-profile.component';
import { MedicalRecordMenuComponent } from './medical-record/shared/medical-record-menu/medical-record-menu.component';
import { MedicalRecordPatientHistoryComponent } from './medical-record/medical-record-patient-history/medical-record-patient-history.component';
import { MedicalRecordDiagnosisTreatmentComponent } from './medical-record/medical-record-diagnosis-treatment/medical-record-diagnosis-treatment.component';
import { MedicalRecordMedicalTestsComponent } from './medical-record/medical-record-medical-tests/medical-record-medical-tests.component';
import { MedicalRecordExternalReportsComponent } from './medical-record/medical-record-external-reports/medical-record-external-reports.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SelectRoleComponent,

    MedicalRecordPatientHistoryComponent,
    MedicalRecordDiagnosisTreatmentComponent,
    MedicalRecordMedicalTestsComponent,
    MedicalRecordExternalReportsComponent,
    //MainLayoutComponent,
    //HeaderComponent,
    //SidebarComponent,
    //HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,

    // Angular Material Modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,

    //Standalone Components
    MainLayoutComponent,
    MedicalRecordComponent,
    MedicalRecordPatientProfileComponent,
    MedicalRecordMenuComponent,

  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
