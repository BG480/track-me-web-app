import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registerForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    
  })

  constructor(private accountService: AccountService, 
    private router: Router,
    private toastr: ToastrService) { }

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
        },
        err => {
          if (err.status == 409){
            this.toastr.error("User with this email already exists.");
          }
          else{
            this.toastr.error("Error occurred.");
          }
        }
      );
    }
    
  }

}
