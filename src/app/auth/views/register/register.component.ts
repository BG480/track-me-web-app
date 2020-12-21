import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{9}/),Validators.maxLength(9)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required,Validators.minLength(7)]),
    ConfirmPassword: new FormControl('', [Validators.required,Validators.minLength(7)]),
  })

  constructor(private authService: AuthService, 
    private router: Router, 
    private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.registerForm.valid && this.registerForm.get('Password').value === this.registerForm.get('ConfirmPassword').value) {
      this.authService.register(this.registerForm.value).subscribe(
        (result: any) => {
          //this.toastr.success("Registration completed successfully.") TODO Powiadomienie
          this.router.navigateByUrl("");
        },
        err => {
          if (err.status == 409){
            //this.toastr.error(err.error.message); TODO Powiadomienie
          }
          else{
            //this.toastr.error("Error occurred."); TODO Powiadomienie
          }
        }
      );
    }
    else {
      // this.toastr.error("Invalid data.") TODO Powiadomienie
    }
  }

  goBack(): void {
    this.location.back();
  }

}
