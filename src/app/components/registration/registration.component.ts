import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    PhoneNumber: new FormControl(''),
    Email: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.registrationForm.value);
  }

}
