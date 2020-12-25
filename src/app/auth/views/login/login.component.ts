import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("home");
        },
        (error: string) => {
          // this.toastr.error(err); TODO: wyświetlić powiadomienie z serwisu do powadomień    
        }
      );
    } else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm() {
    debugger; 
    let formErrorMessage = this.getFormErrorMessage();
    // this.toastr.error(formErrorMessage); TODO: wyświetlić powiadomienie z serwisu do powadomień    
  }

  private getFormErrorMessage(){
    if(this.loginForm.controls['Email'].errors?.required) {
      return 'Email is required.';
    } else if (this.loginForm.controls['Password'].errors?.required) {
      return 'Password is required.';
    } else {
      return 'Invalid form data.';
    }
  }

}
