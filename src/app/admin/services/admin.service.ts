import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Admin } from '../models/admin.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly controllerUrl = environment.apiUrl + '/admins';

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http
    .get<Admin[]>(this.controllerUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getAdmin(id: string): Observable<Admin> {
    return this.http
    .get<Admin>(this.controllerUrl + '/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  createAdmin(formData): Observable<{}> {
    return this.http
    .post(this.controllerUrl, formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteAdmin(id: number): Observable<{}> {
    return this.http
    .delete(this.controllerUrl + '/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if(!errorResponse.error || !errorResponse.error.error) {
      return throwError('An error occurred! Try again later of contact with the support.');
    }
    return throwError(errorResponse.error.error);
  }
}
