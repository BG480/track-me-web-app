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

  constructor(private tripService: TripService,
    private router: Router) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTrips()
    .subscribe(
      (trips: Trip[]) => {
        this.trips = trips
      },
      (error: string) => {
        // this.toastr.error(err); TODO: wyświetlić powiadomienie z serwisu do powadomień
      });
  }
}
