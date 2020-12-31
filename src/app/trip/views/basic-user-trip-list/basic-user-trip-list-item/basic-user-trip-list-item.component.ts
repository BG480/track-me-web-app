import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Trip } from 'src/app/trip/models/trip.model';
import { TripService } from 'src/app/trip/services/trip.service';

@Component({
  selector: 'app-basic-user-trip-list-item',
  templateUrl: './basic-user-trip-list-item.component.html',
  styleUrls: ['./basic-user-trip-list-item.component.css']
})
export class BasicUserTripListItemComponent implements OnInit {
  @Input() trip: Trip;
  @Input() index: number;
  
  constructor(private tripService: TripService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onTripSensorData(): void {
    this.router.navigate(['trip', this.trip.tripId, 'sensor-data']);
  }

  onDeleteTrip(): void {
    this.tripService.deleteTrip(this.trip.tripId).subscribe(
      (result: any) => {
        this.notificationService.showSuccessNotification('Trip successfully deleted.', 'Success');
        this.router.navigate(['trip', 'list']);
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      }
    );
  }

}
