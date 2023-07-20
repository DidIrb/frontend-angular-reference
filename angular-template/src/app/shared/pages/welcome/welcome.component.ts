import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  userData: object | undefined;
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

    if (this.userData) {
      console.log('user logged in check their data: ', this.userData);
      this.path = '/dashboard';
    } else {
      console.log('user not logged in', this.userData);
      this.path = '/sign-in';
    }
    
  }

}
