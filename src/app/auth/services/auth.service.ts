import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/login-response.model';
import { LoggedUser } from '../models/logged-user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly controllerUrl = environment.apiUrl + '/Auth';
  loggedUser = new BehaviorSubject<LoggedUser>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router, private jwtHelperService: JwtHelperService) { }

  login(formData) {
    return this.http
    .post<LoginResponse> (this.controllerUrl + '/Login', formData)
    .pipe(
      catchError(this.handleError),
      tap(responseData => {
        this.handleLogin(responseData.token);
      })
    );
  }

  register(formData) {
      return this.http.post(this.controllerUrl + '/Register', formData);
  }

  autoLogin() {
    const loggedUserData: {
      role: string,
      _token: string,
      _tokenExpirationDate: Date
    } = JSON.parse(localStorage.getItem('loggedUserData'));
    if (!loggedUserData) {
      return;
    }

    const loadedUser = new LoggedUser(
      loggedUserData.role,
      loggedUserData._token,
      new Date(loggedUserData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.loggedUser.next(loadedUser);
      const expirationDuration =
        new Date(loggedUserData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.loggedUser.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleLogin(token: string) {
    const expirationDate = this.jwtHelperService.getTokenExpirationDate(token);
    const role = this.jwtHelperService.decodeToken(token)["Role"];
    const loggedUser = new LoggedUser(role, token, expirationDate);
    const tokenExpirationDuration = Math.abs(new Date().getTime() - expirationDate.getTime());
    this.loggedUser.next(loggedUser);
    this.autoLogout(tokenExpirationDuration);
    localStorage.setItem('loggedUserData', JSON.stringify(loggedUser));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    return throwError(errorMessage);
  }

}
