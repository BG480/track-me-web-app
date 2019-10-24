import { Component, OnInit } from '@angular/core';
import { SensorsValues } from 'src/app/models/sensors-values';
import { TripsService } from 'src/app/services/trips.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  tripName: string;
  sensorsValues: SensorsValues[];

  constructor(private tripsService: TripsService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.tripName = localStorage.getItem('tripName');
    this.getTripDetails();
  }

  private getTripDetails(){
    const id = this.route.snapshot.paramMap.get('id');
    this.tripsService.getTripDetails(id).subscribe(sensorsValues => this.sensorsValues = sensorsValues);
  }

  private goBack(): void{
    localStorage.removeItem('tripName');
    this.location.back();
  }

}
