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
    this.basicUsersService.updateBasicUser(this.basicUser).subscribe(
      (result: any) => {
        this.router.navigateByUrl("user/home");
      },
      err => {
        if(err.status == 404)
        {
          this.toastr.error("Cannot update user's data - user not found.");
        }
        else {
          this.toastr.error("Error occurred.");
        }
        
        }
    );
  }



}
