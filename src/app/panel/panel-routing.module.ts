import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { BasicUserPanelComponent } from './views/basic-user-panel/basic-user-panel.component';

const routes: Routes = [
    {
      path: '',
      component: PanelComponent,
      children: [
        { path: 'basic-user', component: BasicUserPanelComponent },
        { path: 'admin', component: AdminPanelComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PanelRoutingModule {}