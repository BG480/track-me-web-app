import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { BasicUserPageComponent } from './containers/basic-user-page/basic-user-page.component';
import { BasicUserHeaderComponent } from './components/basic-user/basic-user-header/basic-user-header.component';
import { BasicUserAccountComponent } from './components/basic-user/basic-user-account/basic-user-account.component';
import { BasicUserTripsListComponent } from './components/basic-user/basic-user-trips-list/basic-user-trips-list.component';
import { BasicUserHomeComponent } from './components/basic-user/basic-user-home/basic-user-home.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminsListComponent } from './components/admin/admins-list/admins-list.component';
import { BasicUsersListComponent } from './components/admin/basic-users-list/basic-users-list.component';
import { TripsListComponent } from './components/admin/trips-list/trips-list.component';
import { AdminDetailsComponent } from './components/admin/admin-details/admin-details.component';
import { BasicUserDetailsComponent } from './components/admin/basic-user-details/basic-user-details.component';
import { CreateAdminComponent } from './components/admin/create-admin/create-admin.component';
import { FormsModule } from '@angular/forms';
import { TripDetailsComponent } from './components/shared/trip-details/trip-details.component';
import { AdminComponent } from './app/admins/components/admin/admin.component';
import { AdminListComponent } from './admins/views/admin-list/admin-list.component';
import { AdminCreateComponent } from './admins/views/admin-create/admin-create.component';
import { AdminListItemComponent } from './admins/views/admin-list/admin-list-item/admin-list-item.component';  


@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    AdminHeaderComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    BasicUserPageComponent,
    BasicUserHeaderComponent,
    BasicUserAccountComponent,
    BasicUserTripsListComponent,
    BasicUserHomeComponent,
    AdminHomeComponent,
    AdminsListComponent,
    BasicUsersListComponent,
    TripsListComponent,
    AdminDetailsComponent,
    BasicUserDetailsComponent,
    CreateAdminComponent,
    TripDetailsComponent,
    AdminComponent,
    AdminListComponent,
    AdminCreateComponent,
    AdminListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {}
    }),
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
