import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly controllerURL = 'http://localhost:54277/api/Account';

  constructor(private http: HttpClient) { }

  login(formData){
    return this.http.post(this.controllerURL + '/Login', formData);
  }

}
