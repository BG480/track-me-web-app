import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { BasicUserService } from 'src/app/services/basic-user.service';

@Component({
  selector: 'app-user-trips',
  templateUrl: './user-trips.component.html',
  styleUrls: ['./user-trips.component.css']
})
export class UserTripsComponent implements OnInit {
  trips:  Trip[];

  constructor(private basicUserService: BasicUserService) { }

  ngOnInit() {
    debugger;
    this.getTrips();
  }

  public getTrips(): void {
    this.basicUserService.getTrips()
    .subscribe(trips => this.trips = trips);
  }
}
