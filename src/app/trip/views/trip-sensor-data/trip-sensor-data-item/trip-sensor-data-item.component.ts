import { Component, Input, OnInit } from '@angular/core';
import { SensorData } from 'src/app/trip/models/sensor-data.model';

@Component({
  selector: 'app-trip-sensor-data-item',
  templateUrl: './trip-sensor-data-item.component.html',
  styleUrls: ['./trip-sensor-data-item.component.css']
})
export class TripSensorDataItemComponent implements OnInit {
  @Input() sensorData: SensorData;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
