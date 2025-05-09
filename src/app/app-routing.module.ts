import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {SelectRoleComponent} from './auth/register/select-role/select-role.component'

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


const routes: Routes = [

  { path: '', component: MainLayoutComponent }, // Ruta por defecto
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'select-role', component: SelectRoleComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
