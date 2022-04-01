import {Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./main/dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: []
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
