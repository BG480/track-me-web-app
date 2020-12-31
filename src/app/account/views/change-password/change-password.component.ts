import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MustMatch } from 'src/app/shared/validators/must-match';
import { AccountService } from '../../services/account-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  isLoading = false;

  constructor(private accountService: AccountService, 
    private router: Router,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.changePasswordForm= this.formBuilder.group({
      OldPassword: new FormControl('', Validators.required),
      NewPassword: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('', Validators.required)
    }, {
      validators: [MustMatch('NewPassword', 'ConfirmPassword')]
    });
  }

  onSubmit(): void {
    if(this.changePasswordForm.valid) {
      this.isLoading = true;
      this.accountService.changePassword(this.changePasswordForm.value).subscribe(
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
    if(this.changePasswordForm.controls['OldPassword'].errors?.required) {
      return 'Old password is required.';
    } else if (this.changePasswordForm.controls['NewPassword'].errors?.required) {
      return 'New password is required.';
    } else if (this.changePasswordForm.controls['ConfirmPassword'].errors?.required) {
      return 'You need to confirm new password.';
    } else if (this.changePasswordForm.controls['ConfirmPassword'].errors?.mustMatch) {
      return 'Your password and confirmation password do not match.';
    } else {
      return 'Invalid form data.';
    }
  }

}
