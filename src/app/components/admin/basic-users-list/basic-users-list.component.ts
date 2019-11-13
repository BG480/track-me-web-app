import { Component, OnInit } from '@angular/core';
import { BasicUser } from 'src/app/models/basic-user';
import { BasicUsersService } from 'src/app/services/basic-users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-users-list',
  templateUrl: './basic-users-list.component.html',
  styleUrls: ['./basic-users-list.component.css']
})
export class BasicUsersListComponent implements OnInit {

  basicUsers: BasicUser[];

  constructor(private basicUsersService: BasicUsersService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllBasicUsers();
  }

  getAllBasicUsers(): void {
    this.basicUsersService.getAllBasicUsers()
    .subscribe(basicUsers => this.basicUsers = basicUsers);
  }

  showBasicUserDetails(basicUser: BasicUser): void {
    this.router.navigateByUrl('admin/basic-user-details/' + basicUser.id);
  }

  deleteBasicUser(basicUser: BasicUser): void {
    this.basicUsersService.deleteBasicUser(basicUser.id).subscribe(
      (result: any) => {
        this.toastr.success("User successfully deleted.");
        this.getAllBasicUsers();
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
