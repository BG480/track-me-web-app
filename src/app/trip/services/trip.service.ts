import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip.model';
import { SensorData } from '../models/sensor-data.model';
import { environment } from 'src/environments/environment';
import { TripSensorData } from '../models/trip-sensor-data';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  readonly controllerUrl = environment.apiUrl + '/trips';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.controllerUrl)
  }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.controllerUrl + '/all')
  }

  getTripSensorData(id: string): Observable<TripSensorData> {
    return this.http.get<TripSensorData>(this.controllerUrl + '/' + id + '/sensor-data')
  }

  deleteTrip(id: number): Observable<{}> {
    return this.http.delete(this.controllerUrl + '/' + id);
  }
}
