import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];
  
  constructor(private adminService: AdminService, 
    private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins()
    .subscribe(admins => this.admins = admins);
  }

  showAdminDetails(admin: Admin): void {
    this.router.navigateByUrl('admin/admin-details/' + admin.id);
  }

  createAdmin(): void {
    this.router.navigateByUrl('admin/create-admin');
  }

  deleteAdmin(admin: Admin): void {
    this.adminService.deleteAdmin(admin.id).subscribe(
      (result: any) => {
        // this.toastr.success("Admin successfully deleted.") TODO Toastr
        this.getAdmins();
      },
      err => {
        if (err.status == 404){
          // this.toastr.error(err.error.message); // TODO: toastr
        }
        else{
          // this.toastr.error("Error occurred."); // TODO Toastr
        }
      }
    );
  }

}
