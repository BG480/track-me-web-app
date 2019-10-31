import { Component, OnInit } from '@angular/core';
import { SensorsValues } from 'src/app/models/sensors-values';
import { TripsService } from 'src/app/services/trips.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

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
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.tripName = localStorage.getItem('tripName');
    this.getTripDetails();
  }

  private getTripDetails(){
    const id = this.route.snapshot.paramMap.get('id');
    this.tripsService.getTripDetails(id).subscribe(
      (sensorsValues: SensorsValues[]) => {
        this.sensorsValues = sensorsValues;
      },
      err => {
        this.toastr.error("Error occurred - cannot load trip's details.");
      }
    );
  }

  private goBack(): void{
    localStorage.removeItem('tripName');
    this.location.back();
  }

}
