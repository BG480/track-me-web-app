import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.css']
})
export class UserTripsComponent implements OnInit {
  trips:  Trip[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    debugger;
    this.getTrips();
  }

  public getTrips(): void {
    this.userService.getTrips()
    .subscribe(trips => this.trips = trips);
  }
}
