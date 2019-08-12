import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BasicUserPageComponent } from './containers/basic-user-page/basic-user-page.component';
import { BasicUserHomeComponent } from './components/basic-user/basic-user-home/basic-user-home.component';
import { BasicUserAccountComponent } from './components/basic-user/basic-user-account/basic-user-account.component';
import { BasicUserTripsListComponent } from './components/basic-user/basic-user-trips-list/basic-user-trips-list.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'user', 
    component: BasicUserPageComponent,
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
        component: BasicUserHomeComponent
      },
      { path: 'account', 
        component: BasicUserAccountComponent
      },
      { 
        path: 'trips', 
        component: BasicUserTripsListComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
