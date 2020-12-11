import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';
import { TripsService } from '../../services/trip.service';

@Component({
  selector: 'app-all-trips-list',
  templateUrl: './all-trips-list.component.html',
  styleUrls: ['./all-trips-list.component.css']
})
export class AllTripsListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripsService,
    private router: Router) { }

  ngOnInit() {
    this.getAllTrips();
  }

  getAllTrips(): void {
    this.tripsService.getAllTrips()
    .subscribe(trips => this.trips = trips);
  }

  showTripDetails(trip: Trip): void {
    localStorage.setItem('tripName', trip.name);
    this.router.navigateByUrl('admin/trip-details/' + trip.id);
  }

  deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip.id).subscribe(
      (result: any) => {
        // this.toastr.success("Trip successfully deleted."); TODO TOASTR
        this.getAllTrips();
      },
      err => {
        if(err.status == 404) {
          // this.toastr.error(err.error.message);
        } else {
          // this.toastr.error("Error occurred.");
        }       
      }
    );
  }

}
