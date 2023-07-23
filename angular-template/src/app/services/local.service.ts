import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { usersArray } from '../db/usersdb';
import { users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  // We are going to place our services here

  constructor(private router: Router) { }

  // Method to submit data to our local db
  post(bodyData: users, type: any) {

    // Table to check against
    if (type !== "create" && type !== "sign-up") {
      const idx = type
      usersArray[idx] = {
        first_name: bodyData.first_name,
        username: bodyData.username,
        last_name: bodyData.last_name,
        email: bodyData.email,
        role: bodyData.role,
      }
      const response = { status: 200, message: "User Updated successfully", description: `${usersArray}` };
      return response;
    } else {

      let userExists = this.check2PropertyInArray(usersArray, 'email', bodyData.email, 'username', bodyData.username);
      console.log(userExists);

      if (!userExists) {
        // If user does not exist add the users details into the db
        if (type === "sign-up") {
          usersArray.push(bodyData);
          setTimeout(() => {
            this.router.navigate(["/sign-in"]); // Navigate to the next page 
          }, 2000);
        } else {
          usersArray.push(bodyData);
        }

        // Return response
        const response = { status: 200, message: "User created successfully", description: `${bodyData}` };
        return response;

      } else {
        // Return error message
        const response = { status: 400, message: "User already exists", description: `${userExists}` };
        return response;
      }
    }
  }




  // Method to check if the data passed exists
  check2PropertyInArray(array: any, property: any, value: string, property2: any, value2: string) {
    for (let element of array) {
      if (element[property] === value) {
        return `There exists a user with ${element[property]} : ${value}`;
      } else if (element[property2] === value2) {
        return `There exists a user with ${element[property2]} : ${value2}`;
      }
    }
    return false;
  }

  // Calling logout services
  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('UserInfo');
    this.checkStatus();
  }

  checkStatus() {
    // Getting the users information to determine if user is logged in and changing pat accordingly
    const GetUserInfo: any = localStorage.getItem('UserInfo');
    const userData = JSON.parse(GetUserInfo);

    if (userData) {
      console.log('Welcome start using you application', userData);
      return userData;
    } else {
      console.log('Logging you out!!');
      this.router.navigate(["/sign-in"]);
    }

  }

  // GETTING USER DATA

  getUsersReports() {

    // Checking array for users with roles
    let adminsArray = usersArray.filter(obj => obj.role === 'Admin');
    let userArray = usersArray.filter(obj => obj.role === 'User');

    const Reports = {
      allUsers: usersArray.length,
      Admins: adminsArray.length,
      Users: userArray.length,
    }

    // Check if available in 
    return Reports;

  }

}
