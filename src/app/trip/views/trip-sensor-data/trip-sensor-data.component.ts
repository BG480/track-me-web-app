import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SensorData } from '../../models/sensor-data.model';
import { TripSensorData } from '../../models/trip-sensor-data';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-sensor-data',
  templateUrl: './trip-sensor-data.component.html',
  styleUrls: ['./trip-sensor-data.component.css']
})
export class TripSensorDataComponent implements OnInit {

  tripSensorData: TripSensorData;

  constructor(private tripsService: TripService,
    private route: ActivatedRoute,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getTripSensorData();
  }

  getTripSensorData() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tripsService.getTripSensorData(id).subscribe(
      (tripSensorData: TripSensorData) => {
        this.tripSensorData = tripSensorData;
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      }
    );
  }
}
