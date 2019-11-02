import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { TripsService } from 'src/app/services/trips.service';
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
    debugger;
    this.getTrips();
  }

  private getTrips(): void {
    this.tripsService.getTrips()
    .subscribe(trips => this.trips = trips);
  }

  private showTripDetails(trip: Trip): void {
    localStorage.setItem('tripName', trip.name);
    this.router.navigateByUrl('user/trip-details/' + trip.id);
  }

  private deleteTrip(trip: Trip): void {
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
