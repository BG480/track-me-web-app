import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  readonly controllerURL = 'http://localhost:54277/api/Admins';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.controllerURL)
  }

  getAllTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.controllerURL + '/all')
  }
}
