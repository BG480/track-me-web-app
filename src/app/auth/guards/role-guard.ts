import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>  {
    return this.authService.loggedUser.pipe(
      take(1),
      map(user => {
        const isAuthorized = !!user;
        if (isAuthorized) {
          return this.isExpectedRoleCorrect(user.role, route.data.expectedRoles);
        }
        return this.router.createUrlTree(['/auth']);
      }));
  }

  canActivateChild(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>  {
    return this.authService.loggedUser.pipe(
      take(1),
      map(user => {
        const isAuthorized = !!user;
        if (isAuthorized) {
          return this.isExpectedRoleCorrect(user.role, route.data.expectedRoles);
        }
        return this.router.createUrlTree(['/auth']);
      }));
  }

  private isExpectedRoleCorrect(role: string, expectedRoles: string[]) {
    return expectedRoles.includes(role);
  }
}
