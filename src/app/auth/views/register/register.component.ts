import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MustMatch } from 'src/app/shared/validators/must-match';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm
  isLoading = false;

  constructor(private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}/)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(7)]),
      ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
    }, { validators: [MustMatch('Password', 'ConfirmPassword')] });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(this.registerForm.value).subscribe(
        (result: any) => {
          this.notificationService.showSuccessNotification('Registration succeeded. Now you can login to your accoutn with email and password.', 'Success');
          this.router.navigateByUrl("");
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

  private getFormErrorMessage() {
    if (this.registerForm.controls['FirstName'].errors?.required) {
      return 'First name is required.';
    } else if (this.registerForm.controls['LastName'].errors?.required) {
      return 'Last name is required.';
    } else if (this.registerForm.controls['PhoneNumber'].errors?.required) {
      return 'Phone number is required.';
    } else if (this.registerForm.controls['PhoneNumber'].errors?.pattern) {
      return 'Invalid phone number.';
    } else if (this.registerForm.controls['Email'].errors?.required) {
      return 'Email is required.';
    } else if (this.registerForm.controls['Email'].errors?.email) {
      return 'Invalid email.';
    } else if (this.registerForm.controls['Password'].errors?.required) {
      return 'Password is required.';
    } else if (this.registerForm.controls['Password'].errors?.minLength) {
      return 'Password has to contains at least 7 characters.';
    } else if (this.registerForm.controls['ConfirmPassword'].errors?.required) {
      return 'You need to confirm your password.';
    } else if (this.registerForm.controls['ConfirmPassword'].errors?.mustMatch) {
      return 'Your password and confirmation password do not match.';
    } else {
      return 'Invalid form data.';
    }
  }

}
