import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{9}/),Validators.maxLength(9)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required,Validators.minLength(7)]),
    ConfirmPassword: new FormControl('', [Validators.required,Validators.minLength(7)]),
  })

  constructor(private accountService: AccountService, 
    private router: Router,
    private toastr: ToastrService,
    private location: Location) { }

  ngOnInit() { }

  onSubmit(): void {
    if(this.registerForm.valid && this.registerForm.get('Password').value === this.registerForm.get('ConfirmPassword').value) {
      this.accountService.register(this.registerForm.value).subscribe(
        (result: any) => {
          this.toastr.success("Registration completed successfully.")
          this.router.navigateByUrl("");
        },
        err => {
          if (err.status == 409){
            this.toastr.error(err.error.message);
          }
          else{
            this.toastr.error("Error occurred.");
          }
        }
      );
    }
    else {
      this.toastr.error("Invalid data.")
    }
  }

  goBack(): void {
    this.location.back();
  }

}
