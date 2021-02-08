import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/guards/role-guard';
import { AdminComponent } from './admin.component';
import { AdminCreateComponent } from './views/admin-create/admin-create.component';
import { AdminDetailsComponent } from './views/admin-details/admin-details.component';
import { AdminListComponent } from './views/admin-list/admin-list.component';

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      canActivateChild: [RoleGuard],
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'list',
        },
        { path: 'create', component: AdminCreateComponent, data: { expectedRoles: ['Admin']} },
        { path: 'list', component: AdminListComponent, data: { expectedRoles: ['Admin']} },
        { path: ':id', component: AdminDetailsComponent, data: { expectedRoles: ['Admin']} }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {}