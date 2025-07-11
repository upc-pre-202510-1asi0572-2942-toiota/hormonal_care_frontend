import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SelectRoleComponent } from './auth/register/select-role/select-role.component';
import { ProfileComponent } from './profile/pages/profile/profile.component';
import { CreateComponent } from './profile/create/create.component';
import { HomeComponent } from './home/home/home.component';
import { ScheduleComponent } from './appointment/pages/schedule/schedule.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/public/not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { SearchPatientsComponent } from './search/search-patients/search-patients.component';
import { PatientsPageComponent } from './patients-page/patients-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'select-role', component: SelectRoleComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/create', component: CreateComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'search-patients', component: SearchPatientsComponent },
      { path: 'patients', component: PatientsPageComponent,
        children: [
          { path: '', component: SearchPatientsComponent },
          { path: 'medical-record/:id', loadChildren: () => import('./medical-record/medical-record/medical-record.module').then(m => m.MedicalRecordModule) }
        ]
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
