import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { loginGuard } from './core/guards/login.guard';


const routes: Routes = [
{path: '',
redirectTo: 'dashboard',
pathMatch: 'full',
},

{path:'dashboard',
component: DashboardComponent,
canActivate: [authGuard]
},

{path: 'login',
component : LoginComponent,
canActivate:[loginGuard]
}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
