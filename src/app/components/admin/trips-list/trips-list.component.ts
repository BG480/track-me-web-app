import { Component, OnInit } from '@angular/core';
import { TripsService } from 'src/app/services/trips.service';
import { Trip } from 'src/app/models/trip';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripsService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllTrips();
  }

  private getAllTrips(): void{
    this.tripsService.getAllTrips()
    .subscribe(trips => this.trips = trips);
  }

  private showTripDetails(trip: Trip): void {
    localStorage.setItem('tripName', trip.name);
    this.router.navigateByUrl('admin/trip-details/' + trip.id);
  }

  private deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip.id).subscribe(
      (result: any) => {
        this.toastr.success("Trip successfully deleted.");
        this.getAllTrips();
      },
      err => {
        if(err.status == 404) {
          this.toastr.error(err.error.message);
        } else {
          this.toastr.error("Error occurred.");
        }       
      }
    );
  }

}
