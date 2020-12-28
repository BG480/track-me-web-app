import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountData } from '../../models/account-data.model';
import { AccountService } from '../../services/account-service.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']
})
export class AccountDataComponent implements OnInit {

  accountDataForm: FormGroup;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getAccountData();
  }

  getAccountData(): void {
    //const id = this.route.snapshot.paramMap.get('id');
    this.accountService.getAccountData().subscribe(
      (accountData: AccountData) => {
        this.initForm(accountData);
      },
      (error: string) => {
        // this.toastr.error("Error occurred."); TODO TOASTR
      });
  }

  initForm(accountData: AccountData): void {
    this.accountDataForm = new FormGroup({
      FirstName: new FormControl(accountData.firstName, [Validators.required]),
      LastName: new FormControl(accountData.lastName, [Validators.required]),
      PhoneNumber: new FormControl(accountData.phoneNumber, [Validators.required,Validators.pattern(/^\d{9}/)]),
      Email: new FormControl(accountData.email, [Validators.required, Validators.email])
    });
  }

  onSubmit(): void {
    if(this.accountDataForm.valid) {
      this.accountService.updateAccountData(this.accountDataForm.value).subscribe(
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
