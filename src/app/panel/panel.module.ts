import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { BasicUserPanelComponent } from './views/basic-user-panel/basic-user-panel.component';
import { PanelComponent } from './panel.component';
import { RouterModule } from '@angular/router';
import { PanelRoutingModule } from './panel-routing.module';



@NgModule({
  declarations: [AdminPanelComponent, BasicUserPanelComponent, PanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
