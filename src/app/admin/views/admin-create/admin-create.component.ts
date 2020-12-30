import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  createAdminForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required,Validators.minLength(7)]),
    ConfirmPassword: new FormControl('', [Validators.required]),    
  });
  isLoading = false;

  constructor(private router: Router,
    private adminService: AdminService,
    private location: Location,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.createAdminForm.valid && this.createAdminForm.get('Password').value === this.createAdminForm.get('ConfirmPassword').value)
    {
      this.isLoading = true;
      this.adminService.createAdmin(this.createAdminForm.value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("admin/admins");
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
    } else {
      return 'Invalid form data.';
    }
  }

}
