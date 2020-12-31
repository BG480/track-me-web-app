import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin/models/admin.model';
import { AdminService } from 'src/app/admin/services/admin.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-admin-list-item',
  templateUrl: './admin-list-item.component.html',
  styleUrls: ['./admin-list-item.component.css']
})
export class AdminListItemComponent implements OnInit {
  @Input() admin: Admin;
  @Input() index: number;

  constructor(private adminsService: AdminService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onAdminDetails(): void {
    this.router.navigate(['admin', this.admin.adminId], { relativeTo: this.route});
  }

  onDeleteAdmin(): void {
    this.adminsService.deleteAdmin(this.admin.adminId).subscribe(
      (result: any) => {
        this.notificationService.showSuccessNotification('Admin successfully deleted.', 'Success')
        this.router.navigate(['admin', 'list']);
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      }
    );
  }

}
