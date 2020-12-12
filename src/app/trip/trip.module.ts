import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip.component';
import { AllTripListItemComponent } from './views/all-trip-list/all-trip-list-item/all-trip-list-item.component';
import { AllTripListComponent } from './views/all-trip-list/all-trip-list.component';
import { BasicUserTripListItemComponent } from './views/basic-user-trip-list/basic-user-trip-list-item/basic-user-trip-list-item.component';
import { BasicUserTripListComponent } from './views/basic-user-trip-list/basic-user-trip-list.component';
import { TripSensorDataItemComponent } from './views/trip-sensor-data/trip-sensor-data-item/trip-sensor-data-item.component';
import { TripSensorDataComponent } from './views/trip-sensor-data/trip-sensor-data.component';


@NgModule({
    declarations: [
      TripComponent,
      AllTripListComponent,
      AllTripListItemComponent,
      BasicUserTripListComponent,
      BasicUserTripListItemComponent,
      TripSensorDataComponent,
      TripSensorDataItemComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      TripRoutingModule,
    ]
  })
  export class TripModule {}