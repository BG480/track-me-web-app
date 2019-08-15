import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  admin: Admin;

  constructor(private route: ActivatedRoute, 
    private adminsService: AdminsService,
    private location: Location) { }

  ngOnInit() {
    this.getAdminDetails();
  }

  private getAdminDetails(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.adminsService.getAdminDetails(id).subscribe(admin => this.admin = admin);

  }

  private goBack(): void{
    this.location.back();
  }

}
