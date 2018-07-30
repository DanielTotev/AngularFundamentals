import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Forms';
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.authService.authtoken = '';
        this.router.navigate(['/login']);
      })
  }
}
