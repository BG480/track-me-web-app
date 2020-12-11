import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';
import { AccountComponent } from './account.component';
import { AccountDataComponent } from './views/account-data/account-data.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

const routes: Routes = [
    {
      path: '',
      component: AccountComponent,
      canActivate: [AuthGuard],
      data: {
      expectedRole: 'BasicUser'
      },
      children: [
        { path: 'account-data', component: AccountDataComponent },
        { path: 'change-password', component: ChangePasswordComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule {}