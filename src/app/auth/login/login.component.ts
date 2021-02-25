import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: any;
  textPassword: any;

  public loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(4)]]
  })

  constructor(private fb: FormBuilder, private router: Router, public authService: ServicesService) { }


  ngOnInit(): void {
    this.password = document.getElementById('eye');
    this.textPassword = document.getElementById('password');
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          this.router.navigateByUrl('/dashboard/contenido')
        },
        err => {
          console.log(err)
        }
      )
    }
  }


  ver() {
    this.password.classList.toggle("color-eye");

    if(document.querySelector('.color-eye')) {
      this.textPassword.type = "text";
    } else {

      this.textPassword.type = "password";
    }

  }

}
