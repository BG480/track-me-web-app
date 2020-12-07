import { Component, OnInit, OnChanges } from '@angular/core';
import { Admin } from 'src/app/admins/models/admin.model';
import { AdminsService } from 'src/app/admins/services/admins.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {

  admins: Admin[];

  constructor(private adminsService: AdminsService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminsService.getAdmins()
    .subscribe(admins => this.admins = admins);
  }

  showAdminDetails(admin: Admin): void {
    this.router.navigateByUrl('admin/admin-details/' + admin.id);
  }

  createAdmin(): void {
    this.router.navigateByUrl('admin/create-admin');
  }

  deleteAdmin(admin: Admin): void {
    this.adminsService.deleteAdmin(admin.id).subscribe(
      (result: any) => {
        this.toastr.success("Admin successfully deleted.")
        this.getAdmins();
      },
      err => {
        if (err.status == 404){
          this.toastr.error(err.error.message);
        }
        else{
          this.toastr.error("Error occurred.");
        }
      }
    );
  }

}
