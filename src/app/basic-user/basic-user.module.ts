import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BasicUserRoutingModule } from './basic-user-routing.module';
import { BasicUserComponent } from './basic-user.component';

import { BasicUserDetailsComponent } from './views/basic-user-details/basic-user-details.component';
import { BasicUserListComponent } from './views/basic-user-list/basic-user-list.component';


@NgModule({
    declarations: [
      BasicUserComponent,
      BasicUserDetailsComponent,
      BasicUserListComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      BasicUserRoutingModule,
    ]
  })
  export class BasicUserModule {}