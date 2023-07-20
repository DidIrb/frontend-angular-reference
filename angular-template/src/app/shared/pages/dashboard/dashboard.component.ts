import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: users | undefined;

  constructor(private router: Router) { }

  // Getting user Details and showing it
  ngOnInit(): void {
    this.checkStatus();
  }

  checkStatus() {
    // Getting the users information to determine if user is logged in and changing pat accordingly
    const GetUserInfo: any = localStorage.getItem('UserInfo');
    this.userData = JSON.parse(GetUserInfo);

    if (this.userData) {
     console.log('Welcome start using you application', this.userData); 
    } else {
      console.log('Logging you out!!');
      this.router.navigate(["/sign-in"]);
    }
    
  }
  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('UserInfo');
    this.checkStatus();
  }
}
