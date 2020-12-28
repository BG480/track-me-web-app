import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';
import { TripComponent } from './trip.component';
import { AllTripListComponent } from './views/all-trip-list/all-trip-list.component';
import { BasicUserTripListComponent } from './views/basic-user-trip-list/basic-user-trip-list.component';
import { TripSensorDataComponent } from './views/trip-sensor-data/trip-sensor-data.component';

const routes: Routes = [
    {
      path: '',
      component: TripComponent,
      canActivateChild: [AuthGuard],
      children: [
        { path: 'all', component: AllTripListComponent, data: { expectedRoles: ['Admin']} },
        { path: 'list', component: BasicUserTripListComponent, data: { expectedRoles: ['BasicUser'] } },
        { path: ':id/sensor-data', component: TripSensorDataComponent, data: { expectedRoles: ['Admin', 'BasicUser'] } }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TripRoutingModule {}