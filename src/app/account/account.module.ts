import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AccountDataComponent } from './views/account-data/account-data.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';



@NgModule({
    declarations: [
      AccountComponent,
      AccountDataComponent,
      ChangePasswordComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      AccountRoutingModule,
    ]
  })
  export class AccountModule {}