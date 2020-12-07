import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
      RecipesRoutingModule,
      SharedModule
    ]
  })
  export class AuthModule {}