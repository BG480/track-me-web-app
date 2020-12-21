import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
