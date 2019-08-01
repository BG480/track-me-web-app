import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
