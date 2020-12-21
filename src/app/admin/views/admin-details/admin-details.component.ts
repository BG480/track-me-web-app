import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  admin: Admin;

  constructor(private route: ActivatedRoute, 
    private adminService: AdminService,
    private location: Location) { }

  ngOnInit(): void {
    this.getAdminDetails();
  }

  getAdminDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getAdmin(id).subscribe(
      (admin: Admin) => {
        this.admin = admin
      },
      err => {
        if (err.status == 404){
          // this.toastr.error(err.error.message); TODO TOASTR
        }
        else{
          // this.toastr.error("Error occurred."); TODO TOASTR
        }
      });
  }

  goBack(): void{
    this.location.back();
  }

}
