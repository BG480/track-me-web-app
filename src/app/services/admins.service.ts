import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  readonly controllerURL = 'http://localhost:54277/api/Admins';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.controllerURL)
  }
}
