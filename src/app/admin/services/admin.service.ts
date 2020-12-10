import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly controllerUrl = environment.apiUrl + '/admins';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.controllerUrl)
  }

  getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(this.controllerUrl + '/' + id);
  }

  createAdmin(formData): Observable<{}> {
    return this.http.post(this.controllerUrl, formData);
  }

  deleteAdmin(id: number): Observable<{}> {
    return this.http.delete(this.controllerUrl + '/' + id);
  }
}
