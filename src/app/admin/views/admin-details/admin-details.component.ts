import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
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
    private location: Location,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.adminService.getAdmin(id).subscribe(
      (admin: Admin) => {
        this.admin = admin
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      });
  }

  onBack(): void {
    this.location.back();
  }

}
