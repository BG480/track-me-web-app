import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  })
  isLoading = false;

  constructor(private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(this.loginForm.value).subscribe(
        (result: any) => {
          this.router.navigate(['home']);
          this.isLoading = false;
        },
        (error: string) => {
          this.notificationService.showErrorNotification(error, 'Error');
          this.isLoading = false;
        }
      );
    } else {
      this.handleInvalidForm();
    }
  }

  private handleInvalidForm() {
    debugger; 
    let formErrorMessage = this.getFormErrorMessage();
    this.notificationService.showErrorNotification(formErrorMessage, 'Error');  
  }

  private getFormErrorMessage(){
    if(this.loginForm.controls['Email'].errors?.required) {
      return 'Email is required.';
    } else if (this.loginForm.controls['Email'].errors?.email) {
      return 'Invalid email.';
    } else if (this.loginForm.controls['Password'].errors?.required) {
      return 'Password is required.';
    } else {
      return 'Invalid form data.';
    }
  }

}
