import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (localStorage.getItem('token') != null) {
      // Logged in. Add Bearer token.
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
        })
      );
    }
    // Not logged in. Continue without modification.
    return next.handle(req);
  }
}