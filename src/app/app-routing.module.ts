import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserHomeComponent } from './components/user-page/user-home/user-home.component';
import { UserAccountComponent } from './components/user-page/user-account/user-account.component';
import { UserTripsComponent } from './components/user-page/user-trips/user-trips.component';
import { UserTripDetailsComponent } from './components/user-page/user-trip-details/user-trip-details.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'user', 
    component: UserPageComponent,
    canActivate: [AuthGuardService],
    data: {
      expectedRole: 'BasicUser'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      { 
        path: 'home', 
        component: UserHomeComponent
      },
      { path: 'account', 
        component: UserAccountComponent
      },
      { 
        path: 'trips', 
        component: UserTripsComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
