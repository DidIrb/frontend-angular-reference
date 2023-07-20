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
  post(bodyData: users) {
    // Table to check against
    let userExists = this.check2PropertyInArray(usersArray, 'email', bodyData.email, 'username', bodyData.username);
    console.log(userExists);

    if (!userExists) {
      // If user does not exist add the users details into the db
      usersArray.push(bodyData);
      
      setTimeout(() => {
        this.router.navigate(["/sign-in"]); // Navigate to the next page
      }, 2000);
      
      // Return response
      const response = { status: 200, message: "User created successfully", description: `${bodyData}` };
      return response;

    } else {
      // Return error message
      const response = { status: 400, message: "User already exists", description: `${userExists}` };
      return response;
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
}
