import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { BasicUserService } from 'src/app/services/basic-user.service';

@Component({
  selector: 'app-basic-user-trips-list',
  templateUrl: './basic-user-trips-list.component.html',
  styleUrls: ['./basic-user-trips-list.component.css']
})
export class BasicUserTripsListComponent implements OnInit {

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
