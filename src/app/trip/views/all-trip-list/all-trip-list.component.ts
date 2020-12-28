import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-all-trip-list',
  templateUrl: './all-trip-list.component.html',
  styleUrls: ['./all-trip-list.component.css']
})
export class AllTripListComponent implements OnInit {

  trips: Trip[];

  constructor(private tripsService: TripService,
    private router: Router) { }

  ngOnInit() {
    this.getAllTrips();
  }

  getAllTrips(): void {
    this.tripsService.getAllTrips().subscribe(
      (trips: Trip[]) => {
        this.trips = trips
      },
      (error: string) => {
        // this.toastr.error(err); TODO: wyświetlić powiadomienie z serwisu do powadomień
      });
  }
}
