import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.get('Email').value, this.loginForm.get('Password').value).subscribe(
        (result: any) => {
          this.router.navigateByUrl("user/home");
        },
        err => {
          if (err.status == 404){
            // this.toastr.error(err.error.message); TODO: wyświetlić powiadomienie z serwisu do powadomień
          }
          else{
            // this.toastr.error("Error occurred."); TODO: wyświetlić powiadomienie z serwisu do powadomień
          }       
        }
      );
    } else {
      // this.toastr.error("Invalid data.") TODO: wyświetlić powiadomienie z serwisu do powadomień
    }
  }

}
