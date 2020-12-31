import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
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
      SharedModule,
      CommonModule
    ]
  })
  export class AccountModule {}