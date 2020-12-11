import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TripsRoutingModule } from './trips-routing.module';
import { TripsComponent } from './trips.component';
import { AllTripsListItemComponent } from './views/all-trips-list/all-trips-list-item/all-trips-list-item.component';
import { AllTripsListComponent } from './views/all-trips-list/all-trips-list.component';
import { BasicUserTripsListItemComponent } from './views/basic-user-trips-list/basic-user-trips-list-item/basic-user-trips-list-item.component';
import { BasicUserTripsListComponent } from './views/basic-user-trips-list/basic-user-trips-list.component';
import { TripSensorDataItemComponent } from './views/trip-sensor-data/trip-sensor-data-item/trip-sensor-data-item.component';
import { TripSensorDataComponent } from './views/trip-sensor-data/trip-sensor-data.component';


@NgModule({
    declarations: [
      TripsComponent,
      AllTripsListComponent,
      AllTripsListItemComponent,
      BasicUserTripsListComponent,
      BasicUserTripsListItemComponent,
      TripSensorDataComponent,
      TripSensorDataItemComponent
    ],
    imports: [
      RouterModule,
      ReactiveFormsModule,
      TripsRoutingModule,
    ]
  })
  export class TripsModule {}