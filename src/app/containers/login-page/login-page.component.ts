import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  })

  constructor(private accountService: AccountService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe(
        (result: any) => {
          localStorage.setItem('token', result.token);
          if(result.role === 'BasicUser')
          {
            this.router.navigateByUrl("user/home");
          }
          else if(result.role === 'Admin')
          {
            this.router.navigateByUrl("admin/home");
          }       
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
    } else {
      this.toastr.error("Invalid data.")
    }
    
    
    
  }

}
