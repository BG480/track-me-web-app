import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-all-trip-list',
  templateUrl: './all-trip-list.component.html',
  styleUrls: ['./all-trip-list.component.css']
})
export class AllTripListComponent implements OnInit {

  trips: Trip[];
  isLoading = false;

  constructor(private tripsService: TripService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllTrips();
  }

  getAllTrips(): void {
    this.isLoading = true;
    this.tripsService.getAllTrips().subscribe(
      (trips: Trip[]) => {
        this.trips = trips;
        this.isLoading = false;
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
        this.isLoading = false;
      });
  }
}
