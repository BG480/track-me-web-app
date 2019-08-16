import { Component, OnInit } from '@angular/core';
import { BasicUser } from 'src/app/models/basic-user';
import { BasicUsersService } from 'src/app/services/basic-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-users-list',
  templateUrl: './basic-users-list.component.html',
  styleUrls: ['./basic-users-list.component.css']
})
export class BasicUsersListComponent implements OnInit {

  basicUsers: BasicUser[];

  constructor(private basicUsersService: BasicUsersService,
    private router: Router) { }

  ngOnInit() {
    this.getAllBasicUsers();
  }

  private getAllBasicUsers(): void {
    this.basicUsersService.getAllBasicUsers()
    .subscribe(basicUsers => this.basicUsers = basicUsers);
  }

  private showBasicUserDetails(basicUser: BasicUser): void {
    this.router.navigateByUrl('admin/basic-user-details/' + basicUser.id);
  }

  private deleteBasicUser(basicUser: BasicUser): void {

    this.basicUsersService.deleteBasicUser(basicUser.id).subscribe(
      (result: any) => {
        this.getAllBasicUsers();
        console.log("OK")
      },
      err => {
        //if (err.status == 400)
        console.log(err.error.message);
      }
    );
  }
  

}
