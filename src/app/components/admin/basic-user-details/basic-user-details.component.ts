import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicUsersService } from 'src/app/services/basic-users.service';
import { Location } from '@angular/common';
import { BasicUser } from 'src/app/models/basic-user';
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

  private getBasicUserDetails(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.basicUsersService.getBasicUserDetails(id).subscribe(
      (basicUser: BasicUser) => {
        this.basicUser = basicUser
      },
      err => {
        if (err.status == 404){
          this.toastr.error("User's data not found.");
        }
        else{
          this.toastr.error("Error occurred.");
        }
      });

  }

  private goBack(): void{
    this.location.back();
  }

}
