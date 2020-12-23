import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoggedUser } from 'src/app/auth/models/logged-user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;
  isAdmin = false;
  isBasicUser = false;
  isResponsiveNavigationShown = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userSub = this.authService.loggedUser.subscribe(user => {
      if(!!user) {
        this.prepareHeaderState(user);
      }
    });
   }

  onLogout() {
    this.authService.logout();
  }

  onNavigationClick() {
    this.isResponsiveNavigationShown = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  private prepareHeaderState(loggedUser: LoggedUser) {
    switch(loggedUser.role) {
      case 'Admin': {
        this.isAuthenticated = true;
        this.isAdmin = true;
        break;
      }
      case 'BasicUser': {
        this.isAuthenticated = true;
        this.isBasicUser = true;
        break;
      }
    }
  }

}
