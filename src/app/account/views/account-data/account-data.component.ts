import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AccountData } from '../../models/account-data.model';
import { AccountService } from '../../services/account-service.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  accountDataForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^\d{3}-\d{3}-\d{3}$/)]),
    Email: new FormControl('', [Validators.required, Validators.email])
  });
  isLoading = false;

  constructor(private accountService: AccountService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData(): void {
    this.isLoading = true;
    this.accountService.getAccountData().subscribe(
      (accountData: AccountData) => {
        this.initForm(accountData);
        this.isLoading = false;
      },
      (error: string) => {
        this.notificationService.showErrorNotification(error, 'Error');
        this.isLoading = false;
      });
  }

  initForm(accountData: AccountData): void {
    this.accountDataForm.controls['FirstName'].setValue(accountData.firstName);
    this.accountDataForm.controls['LastName'].setValue(accountData.lastName);
    this.accountDataForm.controls['PhoneNumber'].setValue(accountData.phoneNumber);
    this.accountDataForm.controls['Email'].setValue(accountData.email);
  }

  onSubmit(): void {
    if(this.accountDataForm.valid) {
      this.isLoading = true; 
      this.accountService.updateAccountData(this.accountDataForm.value).subscribe(
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
    if(this.accountDataForm.controls['FirstName'].errors?.required) {
      return 'First name is required.';
    } else if (this.accountDataForm.controls['LastName'].errors?.required) {
      return 'Last name is required.';
    } else if (this.accountDataForm.controls['PhoneNumber'].errors?.required) {
      return 'Phone number name is required.';
    } else if (this.accountDataForm.controls['PhoneNumber'].errors?.pattern) {
      return 'Invalid phone number.';
    } else if (this.accountDataForm.controls['Email'].errors?.required) {
      return 'Email name is required.';
    } else if (this.accountDataForm.controls['Email'].errors?.email) {
      return 'Invalid email';
    } else {
      return 'Invalid form data.';
    }
  }
}
