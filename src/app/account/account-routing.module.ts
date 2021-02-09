import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role-guard';
import { AccountComponent } from './account.component';
import { AccountDataComponent } from './views/account-data/account-data.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

const routes: Routes = [
    {
      path: '',
      component: AccountComponent,
      canActivateChild: [RoleGuard],
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'account-data',
        },
        { path: 'account-data', component: AccountDataComponent, data: { expectedRoles: ['BasicUser']} },
        { path: 'change-password', component: ChangePasswordComponent, data: { expectedRoles: ['BasicUser']} }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule {}