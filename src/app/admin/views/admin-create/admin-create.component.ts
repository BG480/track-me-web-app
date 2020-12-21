import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    ConfirmPassword: new FormControl('', [Validators.required,Validators.minLength(7)]),    
  });

  constructor(private router: Router,
    private adminService: AdminService,
    private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.createAdminForm.valid && this.createAdminForm.get('Password').value === this.createAdminForm.get('ConfirmPassword').value)
    {
      this.adminService.createAdmin(this.createAdminForm.value).subscribe(
        (result: any) => {
          // this.toastr.success("Admin successfully created.") TODO TOASTR
          this.router.navigateByUrl("admin/admins");
        },
        err => {
          if (err.status == 409){
            // this.toastr.error(err.error.message); TODO TOASTR
          }
          else{
            // this.toastr.error("Error occurred."); TODO Toastr
          }
        }
      );
    }
    else {
      // this.toastr.error("Invalid data.") TODO TASTR
    }
  }

  goBack(): void {
    this.location.back();
  }

}
