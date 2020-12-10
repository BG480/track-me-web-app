import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminDetailsComponent } from '../components/admin/admin-details/admin-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminCreateComponent } from './views/admin-create/admin-create.component';
import { AdminListComponent } from './views/admin-list/admin-list.component';


@NgModule({
    declarations: [
      AdminComponent,
      AdminCreateComponent,
      AdminDetailsComponent,
      AdminListComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      AdminRoutingModule,
    ]
  })
  export class AdminModule {}