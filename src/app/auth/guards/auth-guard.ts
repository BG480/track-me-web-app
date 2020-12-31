import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterEvent, UrlTree, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.loggedUser.pipe(
            take(1),
            map(user => {
                const isAuthorized = !!user;
                return isAuthorized ? true : this.router.createUrlTree(['/home']);
            }));
    }

    canActivateChild(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.loggedUser.pipe(
            take(1),
            map(user => {
                const isAuthorized = !!user;
                return isAuthorized ? true : this.router.createUrlTree(['/home']);
            }));
    }
}
