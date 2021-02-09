import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Trip } from '../../models/trip.model';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-basic-user-trip-list',
  templateUrl: './basic-user-trip-list.component.html',
  styleUrls: ['./basic-user-trip-list.component.css']
})
export class BasicUserTripListComponent implements OnInit {

  trips: Trip[];
  isLoading = false;

  constructor(private tripService: TripService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getTrips();
  }

  getTrips(): void {
    this.isLoading = true;
    this.tripService.getTrips()
    .subscribe(
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
