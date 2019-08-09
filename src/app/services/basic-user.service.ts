import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class BasicUserService {

  readonly controllerURL = 'http://localhost:54277/api/BasicUser';

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]>{
    debugger; 
    return this.http.get<Trip[]>(this.controllerURL + '/GetTrips');
  }
  
}
