import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {SelectRoleComponent} from './auth/register/select-role/select-role.component'
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './profile/create/create.component';

import { MedicalAppointmentComponent } from './medical-appointment/medical-appointment.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'select-role', component: SelectRoleComponent },
  { path: 'profile', component: ProfileComponent },
  {path : 'profile/create', component: CreateComponent},
  {path: 'medical-appointment', component: MedicalAppointmentComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
