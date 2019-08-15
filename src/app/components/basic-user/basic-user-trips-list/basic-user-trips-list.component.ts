import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripsService } from 'src/app/services/trips.service';


@Component({
  selector: 'app-basic-user-trips-list',
  templateUrl: './basic-user-trips-list.component.html',
  styleUrls: ['./basic-user-trips-list.component.css']
})
export class BasicUserTripsListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripsService) { }

  ngOnInit() {
    debugger;
    this.getTrips();
  }

  private getTrips(): void {
    this.tripsService.getTrips()
    .subscribe(trips => this.trips = trips);
  }

}
