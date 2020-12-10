import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicUser } from '../models/basic-user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicUserService {

  readonly controllerUrl = environment.apiUrl + '/basic-users';

  constructor(private http: HttpClient) { }

  getBasicUsers(): Observable<BasicUser[]>{
    return this.http.get<BasicUser[]>(this.controllerUrl);
  }

  getBasicUser(id: string): Observable<BasicUser>{
    return this.http.get<BasicUser>(this.controllerUrl + '/' + id);
  }

  deleteBasicUser(id: number): Observable<{}> {
    return this.http.delete(this.controllerUrl + '/' + id);
  }

}
