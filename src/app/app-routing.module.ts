import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {SelectRoleComponent} from './auth/register/select-role/select-role.component'
import {ChatComponent} from './chat/chat.component';
import { NotificationComponent } from './notification/notification.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'select-role', component: SelectRoleComponent },
  { path: 'chat', component: ChatComponent},
  { path: 'notifications', component: NotificationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
