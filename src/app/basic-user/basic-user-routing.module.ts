import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role-guard';
import { BasicUserComponent } from './basic-user.component';
import { BasicUserDetailsComponent } from './views/basic-user-details/basic-user-details.component';
import { BasicUserListComponent } from './views/basic-user-list/basic-user-list.component';

const routes: Routes = [
    {
      path: '',
      component: BasicUserComponent,
      canActivateChild: [RoleGuard],
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'list',
        },
        { path: 'list', component: BasicUserListComponent, data: { expectedRoles: ['Admin']} },
        { path: ':id', component: BasicUserDetailsComponent, data: { expectedRoles: ['Admin']} }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BasicUserRoutingModule {}