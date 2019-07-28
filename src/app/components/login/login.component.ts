import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }
  

}
