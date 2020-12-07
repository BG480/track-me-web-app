import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  readonly controllerURL = 'http://localhost:54277/api/Admins';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.controllerURL)
  }

  getAdminDetails(id: string): Observable<Admin> {
    return this.http.get<Admin>(this.controllerURL + '/' + id);
  }

  createAdmin(formData): Observable<{}> {
    return this.http.post(this.controllerURL, formData);
  }

  deleteAdmin(id: number): Observable<{}> {
    return this.http.delete(this.controllerURL + '/' + id);
  }
}
