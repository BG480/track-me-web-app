import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
