import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserHomeComponent } from './components/user-page/user-home/user-home.component';
import { UserAccountComponent } from './components/user-page/user-account/user-account.component';
import { UserTripsComponent } from './components/user-page/user-trips/user-trips.component';
import { UserTripDetailsComponent } from './components/user-page/user-trip-details/user-trip-details.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
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
