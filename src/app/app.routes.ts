import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginSentComponent } from './pages/login-sent/login-sent.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/sent', component: LoginSentComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];