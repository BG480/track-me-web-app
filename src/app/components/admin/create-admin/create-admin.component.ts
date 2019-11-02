import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AdminsService } from 'src/app/services/admins.service';
import { ToastrService } from 'ngx-toastr';


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
    private location: Location,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  private onSubmit(): void {

    if(this.createAdminForm.valid && this.createAdminForm.get('Password').value === this.createAdminForm.get('ConfirmPassword').value)
    {
      this.adminsService.createAdmin(this.createAdminForm.value).subscribe(
        (result: any) => {
          this.toastr.success("Admin successfully created.")
          this.router.navigateByUrl("admin/admins");
        },
        err => {
          if (err.status == 409){
            this.toastr.error(err.error.message);
          }
          else{
            this.toastr.error("Error occurred.");
          }
        }
      );
    }
    else {
      this.toastr.error("Invalid data.")
    }
  }

  private goBack(): void {
    this.location.back();
  }

}
