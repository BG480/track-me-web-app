import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MustMatch } from 'src/app/shared/validators/must-match';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  createAdminForm: FormGroup;
  isLoading = false;

  constructor(private router: Router,
    private adminService: AdminService,
    private location: Location,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.createAdminForm = this.formBuilder.group({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required,Validators.minLength(7)]),
      ConfirmPassword: new FormControl('', [Validators.required]),    
    }, {
      validators: [MustMatch('Password', 'ConfirmPassword')]
    });
  }

  onSubmit(): void {
    if(this.createAdminForm.valid)
    {
      this.isLoading = true;
      this.adminService.createAdmin(this.createAdminForm.value).subscribe(
        (result: any) => {
          this.router.navigate(['admin', 'list']);
          this.isLoading = false;
        },
        (error: string) => {
          this.notificationService.showErrorNotification(error, 'Error');
          this.isLoading = false;
        }
      );
    }
    else {
      this.handleInvalidForm();
    }
  }

  onBack(): void {
    this.location.back();
  }

  private handleInvalidForm() {
    debugger; 
    let formErrorMessage = this.getFormErrorMessage();
    this.notificationService.showErrorNotification(formErrorMessage, 'Error');
  }

  private getFormErrorMessage(){
    if(this.createAdminForm.controls['FirstName'].errors?.required) {
      return 'First name is required.';
    } else if(this.createAdminForm.controls['LastName'].errors?.required) {
      return 'Last name is required.';
    } else if(this.createAdminForm.controls['Email'].errors?.required) {
      return 'Email is required.';
    } else if(this.createAdminForm.controls['Email'].errors?.email) {
      return 'Invalid email.';
    } else if (this.createAdminForm.controls['Password'].errors?.required) {
      return 'Password is required.';
    } else if (this.createAdminForm.controls['Password'].errors?.minLength) {
      return 'Password has to contains at least 7 characters.';
    } else if (this.createAdminForm.controls['ConfirmPassword'].errors?.required) {
      return 'You need to confirm your password.';
    } else if (this.createAdminForm.controls['ConfirmPassword'].errors?.mustMatch) {
      return 'Your password and confirmation password do not match.';
    } else {
      return 'Invalid form data.';
    }
  }

}
