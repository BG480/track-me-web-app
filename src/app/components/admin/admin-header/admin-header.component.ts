import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  headerLogo: string = "TrackMe Admin Panel"
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigateByUrl('');
    
  }

}