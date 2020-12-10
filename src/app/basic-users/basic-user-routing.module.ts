import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';
import { BasicUserComponent } from './basic-user.component';
import { BasicUserDetailsComponent } from './views/basic-user-details/basic-user-details.component';
import { BasicUserListComponent } from './views/basic-user-list/basic-user-list.component';

const routes: Routes = [
    {
      path: '',
      component: BasicUserComponent,
      canActivate: [AuthGuard],
      data: {
      expectedRole: 'Admin'
      },
      children: [
        { path: 'list', component: BasicUserListComponent },
        { path: ':id', component: BasicUserDetailsComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BasicUserRoutingModule {}