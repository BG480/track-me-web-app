import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-basic-user-trip-list',
  templateUrl: './basic-user-trip-list.component.html',
  styleUrls: ['./basic-user-trip-list.component.css']
})
export class BasicUserTripListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripService,
    private router: Router) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.tripsService.getTrips()
    .subscribe(trips => this.trips = trips);
  }

  showTripDetails(trip: Trip): void {
    localStorage.setItem('tripName', trip.name);
    this.router.navigateByUrl('user/trip-details/' + trip.tripId);
  }

  deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip.tripId).subscribe(
      (result: any) => {
        // this.toastr.success("Trip successfully deleted."); TODO TOASTR
        this.getTrips();
      },
      err => {
        if(err.status == 404) {
          // this.toastr.error(err.error.message);
        }
        else {
          // this.toastr.error("Error occurred.");
        }      
      }
    );
  }

}
