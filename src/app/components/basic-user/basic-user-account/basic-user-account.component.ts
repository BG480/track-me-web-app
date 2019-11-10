import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BasicUsersService } from 'src/app/services/basic-users.service';
import { BasicUser } from 'src/app/models/basic-user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-user-account',
  templateUrl: './basic-user-account.component.html',
  styleUrls: ['./basic-user-account.component.css']
})
export class BasicUserAccountComponent implements OnInit {

  @Input() basicUser: BasicUser; 

  constructor(private router: Router,
    private basicUsersService: BasicUsersService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getBasicUser();
  }

  private getBasicUser(): void {
    this.basicUsersService.getBasicUserAccountDetails().subscribe(
      basicUser => this.basicUser = basicUser);
  }

  private updateBasicUser(): void {
    if(this.validateBasicUserData())
    {
    this.basicUsersService.updateBasicUser(this.basicUser).subscribe(
      (result: any) => {
        this.toastr.success("Account data succesfully updated.");
        this.router.navigateByUrl("user/home");
      },
      err => {
        if(err.status == 404)
        {
          this.toastr.error(err.error.message);
        }
        else {
          this.toastr.error("Error occurred.");
        }
        
        }
    );
      } else {
        this.toastr.error("Invalid data.");
      }
  }

  private validateBasicUserData(): boolean{
    var emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var phoneNumberRegex = /\d{3}-\d{3}-\d{3}/;
    if(this.basicUser.firtsName !== "" && this.basicUser.lastName !== "" && phoneNumberRegex.test(this.basicUser.phoneNumber) && emailRegex.test(this.basicUser.email)
    )
    {
      return true;
    }
    return false;
  }



}
