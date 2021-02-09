import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicUserRoutingModule } from './basic-user-routing.module';
import { BasicUserComponent } from './basic-user.component';

import { BasicUserDetailsComponent } from './views/basic-user-details/basic-user-details.component';
import { BasicUserListItemComponent } from './views/basic-user-list/basic-user-list-item/basic-user-list-item.component';
import { BasicUserListComponent } from './views/basic-user-list/basic-user-list.component';


@NgModule({
    declarations: [
      BasicUserComponent,
      BasicUserDetailsComponent,
      BasicUserListComponent,
      BasicUserListItemComponent
    ],
    imports: [
      RouterModule,
      CommonModule,
      BasicUserRoutingModule,
      SharedModule
    ]
  })
  export class BasicUserModule {}