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
    PhoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{9}/)]),
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
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (result: any) => {
          //this.toastr.success("Registration completed successfully.") TODO Powiadomienie
          this.router.navigateByUrl("");
        },
        (error: string) => {
          //this.toastr.error(err.error.message); TODO Powiadomienie
        }
      );
    }else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm() {
    debugger; 
    let formErrorMessage = this.getFormErrorMessage();
    // this.toastr.error(formErrorMessage); TODO: wyświetlić powiadomienie z serwisu do powadomień    
  }

  private getFormErrorMessage(){
    if(this.registerForm.controls['FirstName'].errors?.required) {
      return 'First name is required.';
    } else if(this.registerForm.controls['LastName'].errors?.required) {
      return 'Last name is required.';
    } else if(this.registerForm.controls['PhoneNumber'].errors?.required) {
      return 'Phone number is required.';
    } else if(this.registerForm.controls['PhoneNumber'].errors?.pattern) {
      return 'Invalid phone number.';
    } else if(this.registerForm.controls['Email'].errors?.required) {
      return 'Email is required.';
    } else if(this.registerForm.controls['Email'].errors?.email) {
      return 'Invalid email.';
    } else if (this.registerForm.controls['Password'].errors?.required) {
      return 'Password is required.';
    } else if (this.registerForm.controls['Password'].errors?.minLength) {
      return 'Password has to contains at least 7 characters.';
    } else if (this.registerForm.controls['ConfirmPassword'].errors?.required) {
      return 'You need to confirm your password.';
    } else {
      return 'Invalid form data.';
    }
  }

}
