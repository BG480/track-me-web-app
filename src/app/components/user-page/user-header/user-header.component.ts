import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  headerLogo: string = "TrackMe"
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
    
  }

}
