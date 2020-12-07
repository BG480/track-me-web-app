import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicUsersService } from 'src/app/basic-users/services/basic-user.service';
import { Location } from '@angular/common';
import { BasicUser } from 'src/app/basic-users/models/basic-user.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-basic-user-details',
  templateUrl: './basic-user-details.component.html',
  styleUrls: ['./basic-user-details.component.css']
})
export class BasicUserDetailsComponent implements OnInit {

  basicUser: BasicUser;

  constructor(private route: ActivatedRoute,
    private basicUsersService: BasicUsersService,
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getBasicUserDetails();
  }

  getBasicUserDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.basicUsersService.getBasicUserDetails(id).subscribe(
      (basicUser: BasicUser) => {
        this.basicUser = basicUser
      },
      err => {
        if (err.status == 404){
          this.toastr.error(err.error.message);
        }
        else{
          this.toastr.error("Error occurred.");
        }
      });

  }

  public goBack(): void {
    this.location.back();
  }

}
