import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicUser } from '../models/basic-user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicUserService {

  readonly controllerUrl = environment.apiUrl + '/basic-users';

  constructor(private http: HttpClient) { }

  getBasicUsers(): Observable<BasicUser[]> {
    return this.http
    .get<BasicUser[]>(this.controllerUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getBasicUser(id: string): Observable<BasicUser> {
    return this.http
    .get<BasicUser>(this.controllerUrl + '/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteBasicUser(id: number): Observable<{}> {
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
