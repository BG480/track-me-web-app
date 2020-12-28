import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin/models/admin.model';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-admin-list-item',
  templateUrl: './admin-list-item.component.html',
  styleUrls: ['./admin-list-item.component.css']
})
export class AdminListItemComponent implements OnInit {
  @Input() admin: Admin;
  @Input() index: number;

  constructor(private adminsService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onAdminDetails(): void {
    this.router.navigateByUrl('admin/' + this.admin.adminId);
  }

  onDeleteAdmin(): void {
    this.adminsService.deleteAdmin(this.admin.adminId).subscribe(
      (result: any) => {
        //this.toastr.success("Admin successfully deleted.")
        this.router.navigateByUrl('list');
      },
      (error: string) => {
        //this.toastr.success("Admin successfully deleted.")
      }
    );
  }

}
