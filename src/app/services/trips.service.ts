import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { SensorsValues } from '../models/sensors-values';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  readonly controllerURL = 'http://localhost:54277/api/Trips';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.controllerURL)
  }

  getAllTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.controllerURL + '/all')
  }

  getTripDetails(id: string): Observable<SensorsValues[]> {
    return this.http.get<SensorsValues[]>(this.controllerURL + '/' + id + '/details')
  }

  deleteTrip(id: number): Observable<{}> {
    return this.http.delete(this.controllerURL + '/' + id);
  }
}
