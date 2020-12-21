import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountData } from '../models/account-data.model';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private readonly controllerUrl = environment.apiUrl + '/account';

  constructor(private http: HttpClient) { }

  getAccountData(): Observable<AccountData> {
    return this.http.get<AccountData>(this.controllerUrl + '/account-data');
  }

  updateAccountData(formData: {}): Observable<{}> {
    return this.http.post(this.controllerUrl + '/account-data', formData);
  }

  createAdmin(formData: {}): Observable<{}> {
    return this.http.post(this.controllerUrl, formData);
  }
}
