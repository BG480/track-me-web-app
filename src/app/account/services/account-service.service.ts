import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AccountData } from '../models/account-data.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly controllerUrl = environment.apiUrl + '/account';

  constructor(private http: HttpClient) { }

  getAccountData(): Observable<AccountData> {
    return this.http
    .get<AccountData>(this.controllerUrl + '/account-data')
    .pipe(
      catchError(this.handleError)
    );
  }

  updateAccountData(formData: {}): Observable<{}> {
    return this.http
    .post(this.controllerUrl + '/account-data', formData)
    .pipe(
      catchError(this.handleError)
    );
  }

  changePassword(formData: {}): Observable<{}> {
    return this.http
    .post(this.controllerUrl + '/change-password', formData)
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
