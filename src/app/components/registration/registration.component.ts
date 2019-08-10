import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    
  })

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.registerForm.valid);
    console.warn(this.registerForm.get('Password').value === this.registerForm.get('ConfirmPassword').value);
    if(this.registerForm.valid && this.registerForm.get('Password').value === this.registerForm.get('ConfirmPassword').value)
    {
      this.accountService.register(this.registerForm.value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("");
          console.log("OK")
        },
        err => {
          //if (err.status == 400)
          console.log(err.error.message);
        }
      );
    }
    
  }

  

  
  

}
