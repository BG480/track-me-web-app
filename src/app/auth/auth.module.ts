import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


@NgModule({
    declarations: [
      AuthComponent,
      LoginComponent,
      RegisterComponent,
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      AuthRoutingModule,
    ]
  })
  export class AuthModule {}