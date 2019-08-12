import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserHomeComponent } from './components/user-page/user-home/user-home.component';
import { UserTripsComponent } from './components/user-page/user-trips/user-trips.component';
import { UserAccountComponent } from './components/user-page/user-account/user-account.component';
import { UserTripDetailsComponent } from './components/user-page/user-trip-details/user-trip-details.component';
import { UserHeaderComponent } from './components/user-page/user-header/user-header.component';
import { AccountService } from './services/account.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegistrationPageComponent } from './containers/registration-page/registration-page.component';
import { BasicUserPageComponent } from './containers/basic-user-page/basic-user-page.component';
import { BasicUserHeaderComponent } from './components/basic-user/basic-user-header/basic-user-header.component';
import { BasicUserTripsComponent } from './components/basic-user/basic-user-trips/basic-user-trips.component';
import { BasicUserAccountComponent } from './components/basic-user/basic-user-account/basic-user-account.component';
import { BasicUserTripsListComponent } from './components/basic-user/basic-user-trips-list/basic-user-trips-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserHomeComponent,
    UserTripsComponent,
    UserAccountComponent,
    UserTripDetailsComponent,
    UserHeaderComponent,
    AdminPageComponent,
    AdminHeaderComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    BasicUserPageComponent,
    BasicUserHeaderComponent,
    BasicUserTripsComponent,
    BasicUserAccountComponent,
    BasicUserTripsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {}
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
