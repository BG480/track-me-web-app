import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUser } from 'src/app/basic-user/models/basic-user.model';
import { BasicUserService } from 'src/app/basic-user/services/basic-user.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-basic-user-list-item',
  templateUrl: './basic-user-list-item.component.html',
  styleUrls: ['./basic-user-list-item.component.css']
})
export class BasicUserListItemComponent implements OnInit {
  @Input() basicUser: BasicUser;
  @Input() index: number;

  constructor(private basicUserService: BasicUserService, 
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onBasicUserDetails(): void {
    this.router.navigate(['basic-user', this.basicUser.basicUserId]);
  }

  onDeleteBasicUser(): void {
    this.basicUserService.deleteBasicUser(this.basicUser.basicUserId).subscribe(
      (result: any) => {
        window.location.reload();
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
      }
    );
  }

}
