import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/admins/models/admin.model';
import { ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/admins/services/admins.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  admin: Admin;

  constructor(private route: ActivatedRoute, 
    private adminsService: AdminsService,
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAdminDetails();
  }

  getAdminDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminsService.getAdminDetails(id).subscribe(
      (admin: Admin) => {
        this.admin = admin
      },
      err => {
        if (err.status == 404){
          this.toastr.error(err.error.message);
        }
        else{
          this.toastr.error("Error occurred.");
        }
      });
  }

  goBack(): void{
    this.location.back();
  }

}
