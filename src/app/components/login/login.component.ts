import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AccountService} from './../../services/account.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl(''),
    Password: new FormControl(''),
  })

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.token);
        debugger;
        this.router.navigateByUrl("user/home");
        console.log("OK")
      },
      err => {
        //if (err.status == 400)
        console.log(err);
      }
    );
    
    
  }
  

}
