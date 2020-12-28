import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUser } from 'src/app/basic-user/models/basic-user.model';
import { BasicUserService } from 'src/app/basic-user/services/basic-user.service';

@Component({
  selector: 'app-basic-user-list-item',
  templateUrl: './basic-user-list-item.component.html',
  styleUrls: ['./basic-user-list-item.component.css']
})
export class BasicUserListItemComponent implements OnInit {
  @Input() basicUser: BasicUser;
  @Input() index: number;

  constructor(private basicUserService: BasicUserService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onBasicUserDetails(): void {
    this.router.navigateByUrl('basic-user/' + this.basicUser.basicUserId);
  }

  onDeleteBasicUser(): void {
    this.basicUserService.deleteBasicUser(this.basicUser.basicUserId).subscribe(
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
