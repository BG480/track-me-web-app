import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'user', 
    component: UserPageComponent,
    canActivate: [AuthGuardService],
    data: {
      expectedRole: 'BasicUser'
  }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
