import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorData } from '../../models/sensor-data.model';
import { TripsService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-sensor-data',
  templateUrl: './trip-sensor-data.component.html',
  styleUrls: ['./trip-sensor-data.component.css']
})
export class TripSensorDataComponent implements OnInit {

  sensorsValues: SensorData[];

  constructor(private tripsService: TripsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getTripDetails();
  }

  getTripDetails() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tripsService.getTripDetails(id).subscribe(
      (sensorsValues: SensorData[]) => {
        this.sensorsValues = sensorsValues;
      },
      err => {
        // this.toastr.error("Error occurred - cannot load trip's details."); TODO TOASTR
      }
    );
  }

  goBack(): void {
    localStorage.removeItem('tripName');
    this.location.back();
  }

}
