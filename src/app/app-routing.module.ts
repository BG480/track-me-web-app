import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { AuthGuard } from './auth/guards/auth-guard';
import { BasicUserPageComponent } from './containers/basic-user-page/basic-user-page.component';
import { BasicUserHomeComponent } from './components/basic-user/basic-user-home/basic-user-home.component';
import { BasicUserAccountComponent } from './components/basic-user/basic-user-account/basic-user-account.component';
import { BasicUserTripsListComponent } from './components/basic-user/basic-user-trips-list/basic-user-trips-list.component';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminsListComponent } from './components/admin/admins-list/admins-list.component';
import { BasicUsersListComponent } from './components/admin/basic-users-list/basic-users-list.component';
import { TripsListComponent } from './components/admin/trips-list/trips-list.component';
import { AdminDetailsComponent } from './components/admin/admin-details/admin-details.component';
import { BasicUserDetailsComponent } from './components/admin/basic-user-details/basic-user-details.component';
import { CreateAdminComponent } from './components/admin/create-admin/create-admin.component';
import { TripDetailsComponent } from './components/shared/trip-details/trip-details.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'user', 
    component: BasicUserPageComponent,
    canActivate: [AuthGuard],
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
      },
      {
        path: 'trip-details/:id',
        component: TripDetailsComponent
      }
    ],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'Admin'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      { 
        path: 'home', 
        component: AdminHomeComponent
      },
      { path: 'admins', 
        component: AdminsListComponent
      },
      { 
        path: 'basic-users', 
        component: BasicUsersListComponent
      },
      {
        path: 'trips',
        component: TripsListComponent
      },
      {
        path: 'admin-details/:id',
        component: AdminDetailsComponent
      },
      {
        path: 'basic-user-details/:id',
        component: BasicUserDetailsComponent
      },
      {
        path: 'create-admin',
        component: CreateAdminComponent
      },
      {
        path: 'trip-details/:id',
        component: TripDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
