import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasicUser } from '../../models/basic-user.model';
import { BasicUserService } from '../../services/basic-user.service';

@Component({
  selector: 'app-basic-user-details',
  templateUrl: './basic-user-details.component.html',
  styleUrls: ['./basic-user-details.component.css']
})
export class BasicUserDetailsComponent implements OnInit {

  basicUser: BasicUser;

  constructor(private route: ActivatedRoute,
    private basicUserService: BasicUserService,
    private location: Location) { }

    ngOnInit() {
      this.getBasicUserDetails();
    }
  
    getBasicUserDetails(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.basicUserService.getBasicUser(id).subscribe(
        (basicUser: BasicUser) => {
          this.basicUser = basicUser
        },
        err => {
          if (err.status == 404){
            // this.toastr.error(err.error.message); TODO TOASTR
          }
          else{
            // this.toastr.error("Error occurred."); TODO TASTR
          }
        });
  
    }
  
    public goBack(): void {
      this.location.back();
    }

}
