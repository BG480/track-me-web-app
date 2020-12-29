import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit(): void {
  }

  onTripSensorData(): void {
    this.router.navigateByUrl('trip/' + this.trip.tripId + '/sensor-data');
  }

  onDeleteTrip(): void {
    this.tripService.deleteTrip(this.trip.tripId).subscribe(
      (result: any) => {
        //this.toastr.success("Admin successfully deleted.")
        this.router.navigateByUrl('list');
      },
      (error: string) => {
        //this.toastr.success("Admin successfully deleted.")
      }
    );
  }

}
