import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel
  registerFailed: boolean = false;
  errorMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) { 
    this.model = new RegisterModel('', '', '', '', '',);
  }

  register() {
    let { username , password, firstName, lastName, email, age } = this.model;
    this.authService.register({ username , password, firstName, lastName, email, age })
      .subscribe(data => {
        // this.authService.authtoken = data['_kmd']['authtoken'];
        // localStorage.setItem('authtoken', this.authService.authtoken);
        this.router.navigate(['/login']);
      }, error => {
        this.registerFailed = true;
        this.errorMessage = error['error']['description'];
      });
  }

  ngOnInit() {
  }

}
