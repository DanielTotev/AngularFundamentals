import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import  { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean = false;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.model)
      .subscribe(data => {
        console.log(data);
        this.authService.authtoken = data['_kmd']['authtoken'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        this.router.navigate(['/']);
      }, err => {
        this.loginFailed = true;
        this.errorMessage = err['error']['description'];
      });
  }
}
