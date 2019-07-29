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

  constructor(private accountController: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.accountController.login(this.loginForm.value).subscribe(
      (result: any) => {
        localStorage.setItem('token', result.token);
        //this.router.navigateByUrl()
        console.log("OK")
      },
      error => {
        console.log("ERROR")
      }
    );
    
    
  }
  

}
