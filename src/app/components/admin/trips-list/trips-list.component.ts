import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripsService) { }

  ngOnInit() {
    this.getAllTrips();
  }

  private getAllTrips(): void{
    this.tripsService.getAllTrips()
    .subscribe(trips => this.trips = trips);
  }

}
