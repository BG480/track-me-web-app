import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserHomeComponent } from './components/user-page/user-home/user-home.component';
import { UserTripsComponent } from './components/user-page/user-trips/user-trips.component';
import { UserAccountComponent } from './components/user-page/user-account/user-account.component';
import { UserTripDetailsComponent } from './components/user-page/user-trip-details/user-trip-details.component';
import { UserHeaderComponent } from './components/user-page/user-header/user-header.component';
import { AccountService } from './services/account.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

export function tokenGetter() {
  debugger;
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserPageComponent,
    UserHomeComponent,
    UserTripsComponent,
    UserAccountComponent,
    UserTripDetailsComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:54277']
        }
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
