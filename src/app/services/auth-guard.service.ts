import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    
    const token = localStorage.getItem("token");
    const tokenPayload = this.jwtHelper.decodeToken(token);
    debugger;
    if(this.jwtHelper.isTokenExpired(token) || tokenPayload["Role"] != route.data.expectedRole)
    {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
