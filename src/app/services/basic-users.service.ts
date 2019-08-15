import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicUser } from '../models/basic-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicUsersService {

  readonly controllerURL = 'http://localhost:54277/api/BasicUsers';

  constructor(private http: HttpClient) { }

  getAllBasicUsers(): Observable<BasicUser[]>{
    return this.http.get<BasicUser[]>(this.controllerURL + '/all')
  }

  getBasicUserDetails(id: string): Observable<BasicUser>{
    return this.http.get<BasicUser>(this.controllerURL + '/' + id);
  }
}
