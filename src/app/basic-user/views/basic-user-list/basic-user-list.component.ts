import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicUser } from '../../models/basic-user.model';
import { BasicUserService } from '../../services/basic-user.service';

@Component({
  selector: 'app-basic-user-list',
  templateUrl: './basic-user-list.component.html',
  styleUrls: ['./basic-user-list.component.css']
})
export class BasicUserListComponent implements OnInit {

  basicUsers: BasicUser[];

  constructor(private basicUserService: BasicUserService,
    private router: Router) { }

  ngOnInit() {
    this.getBasicUsers();
  }

  getBasicUsers(): void {
    this.basicUserService.getBasicUsers()
    .subscribe(basicUsers => this.basicUsers = basicUsers);
  }

  showBasicUserDetails(basicUser: BasicUser): void {
    this.router.navigateByUrl('admin/basic-user-details/' + basicUser.id);
  }

  deleteBasicUser(basicUser: BasicUser): void {
    this.basicUserService.deleteBasicUser(basicUser.id).subscribe(
      (result: any) => {
        // this.toastr.success("User successfully deleted."); // TODO TOASTR
        this.getBasicUsers();
      },
      err => {
        if (err.status == 404){
          // this.toastr.error(err.error.message); // TODO TOASTR
        }
        else{
          // this.toastr.error("Error occurred."); // TODO TOASTR 
        }
      }
    );
  }

}
