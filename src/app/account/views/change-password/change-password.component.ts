import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AccountService } from '../../services/account-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm = new FormGroup({
    OldPassword: new FormControl('', Validators.required),
    NewPassword: new FormControl('', Validators.required),
    ConfirmPassword: new FormControl('', Validators.required)
  });
  isLoading = false;

  constructor(private accountService: AccountService, 
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.changePasswordForm.valid) {
      this.isLoading = true;
      this.accountService.changePassword(this.changePasswordForm.value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("home");
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
    } else {
      return 'Invalid form data.';
    }
  }

}
