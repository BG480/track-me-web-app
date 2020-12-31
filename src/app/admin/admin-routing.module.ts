import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';
import { AdminComponent } from './admin.component';
import { AdminCreateComponent } from './views/admin-create/admin-create.component';
import { AdminDetailsComponent } from './views/admin-details/admin-details.component';
import { AdminListComponent } from './views/admin-list/admin-list.component';

const routes: Routes = [
    {
      path: '',
      component: AdminComponent,
      canActivate: [AuthGuard],
      data: {
        expectedRoles: ['Admin']
      },
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'list',
        },
        { path: 'create', component: AdminCreateComponent },
        { path: 'list', component: AdminListComponent },
        { path: ':id', component: AdminDetailsComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {}