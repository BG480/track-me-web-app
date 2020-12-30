import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from "@angular/common";
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];
  
  constructor(private adminService: AdminService, 
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins().subscribe
    (
      (admins: Admin[]) => {
        this.admins = admins;
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      }
    );
  }

  onCreateAdmin(): void {
    this.router.navigateByUrl('admin/create');
  }
}
