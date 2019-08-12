import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-user-header',
  templateUrl: './basic-user-header.component.html',
  styleUrls: ['./basic-user-header.component.css']
})
export class BasicUserHeaderComponent implements OnInit {

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
