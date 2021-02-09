import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminCreateComponent } from './views/admin-create/admin-create.component';
import { AdminDetailsComponent } from './views/admin-details/admin-details.component';
import { AdminListItemComponent } from './views/admin-list/admin-list-item/admin-list-item.component';
import { AdminListComponent } from './views/admin-list/admin-list.component';


@NgModule({
    declarations: [
      AdminComponent,
      AdminCreateComponent,
      AdminDetailsComponent,
      AdminListComponent,
      AdminListItemComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      AdminRoutingModule,
      CommonModule,
      SharedModule
    ]
  })
  export class AdminModule {}