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

  constructor(private tripsService: TripService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.getAllTrips();
  }

  getAllTrips(): void {
    this.tripsService.getAllTrips().subscribe(
      (trips: Trip[]) => {
        this.trips = trips
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      });
  }
}
