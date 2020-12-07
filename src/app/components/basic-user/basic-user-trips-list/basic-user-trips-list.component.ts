import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/trip/models/trip.model';
import { TripsService } from 'src/app/trip/services/trip.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-basic-user-trips-list',
  templateUrl: './basic-user-trips-list.component.html',
  styleUrls: ['./basic-user-trips-list.component.css']
})
export class BasicUserTripsListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripsService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.tripsService.getTrips()
    .subscribe(trips => this.trips = trips);
  }

  showTripDetails(trip: Trip): void {
    localStorage.setItem('tripName', trip.name);
    this.router.navigateByUrl('user/trip-details/' + trip.id);
  }

  deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip.id).subscribe(
      (result: any) => {
        this.toastr.success("Trip successfully deleted.");
        this.getTrips();
      },
      err => {
        if(err.status == 404) {
          this.toastr.error(err.error.message);
        }
        else {
          this.toastr.error("Error occurred.");
        }      
      }
    );
  }

}
