import { Component } from '@angular/core';
import { users } from 'src/app/models/users';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  userData: users | undefined;
  path: string | undefined;

  // let us do something complicated to an extent
  constructor() {}

  //
  ngOnInit(): void {
    this.checkStatus()
  }
  // I wish to 

  checkStatus() {
    // Getting the users information to determine if user is logged in and changing pat accordingly
    const GetUserInfo: any = localStorage.getItem('UserInfo');
    this.userData = JSON.parse(GetUserInfo);

    if (this.userData?.role === "Admin") {
      console.log('user logged in check their data: ', this.userData);
      this.path = '/admin/dashboard';
    } else if(this.userData?.role === "User") {
      console.log('user logged in check their data: ', this.userData);
      this.path = 'user/dashboard';
    } else {
      console.log('/user not logged in', this.userData);
      this.path = '/sign-in';
    }
    
  }

}
