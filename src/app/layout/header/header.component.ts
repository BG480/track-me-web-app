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

  headerLogo: string = "TrackMe"
  isAuthenticated = false;
  isAdmin = false;
  isBasicUser = false;
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

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  private prepareHeaderState(loggedUser: LoggedUser) {
    switch(loggedUser.role) {
      case 'Admin': {
        this.isAuthenticated = true;
        this.headerLogo = 'TrackMe Admin Panel';
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
