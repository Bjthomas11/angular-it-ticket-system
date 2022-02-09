import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-ticket', component: RegisterComponent },
  { path: 'tickets', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
