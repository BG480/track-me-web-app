import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdminsService } from 'src/app/services/admins.service';


@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

    createAdminForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    
  })

  constructor(private router: Router,
    private adminsService: AdminsService,
    private location: Location) { }

  ngOnInit() {
  }

  private onSubmit(): void {

    if(this.createAdminForm.valid && this.createAdminForm.get('Password').value === this.createAdminForm.get('ConfirmPassword').value)
    {
      this.adminsService.createAdmin(this.createAdminForm.value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("admin/admins");
          console.log("OK")
        },
        err => {
          //if (err.status == 400)
          console.log(err.error.message);
        }
      );
    }
  }

  private goBack(): void {
    this.location.back();
  }

}
