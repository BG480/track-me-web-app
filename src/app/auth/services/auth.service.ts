import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly controllerURL = 'http://localhost:54277/api/Account';

  constructor(private http: HttpClient) { }

  login(formData): Observable<{}> {
    return this.http.post(this.controllerURL + '/Login', formData);
  }

  register(formData): Observable<{}> {
    return this.http.post(this.controllerURL + '/Register', formData);
  }

}
