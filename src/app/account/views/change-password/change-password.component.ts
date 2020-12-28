import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.changePasswordForm.valid) {
      this.accountService.changePassword(this.changePasswordForm.value).subscribe(
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
