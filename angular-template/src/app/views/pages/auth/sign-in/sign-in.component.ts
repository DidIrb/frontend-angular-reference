import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersArray } from 'src/app/db/usersdb';
import { Environment } from 'src/app/environments/env';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  Form!: FormGroup; // You have to add ! to prevent an error
  
  isLoading: boolean = false;
  userExists: boolean | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private router: Router, private fb: FormBuilder) { }

  // Method to run on initialization of form!
  ngOnInit() {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Constructing our form
  onSubmit(Form: FormGroup) {
    this.isLoading = true;
    const bodyData = {
      email: Form.value.email,
      password: Form.value.password,
    };

    // If the base does not exist we are assuming you have no backend working
    if (Environment.BASE) {
      console.log('You have made some configuration!!!');
    } else {
      console.log('Working without our backend!!!');
      setTimeout(() => {  // Simulate waiting for response from an api 
        this.localSUbmit(bodyData);
      }, 3000);
    }
  }

  localSUbmit(bodyData: { email: string; password: string; }) {

    // Table to check against
    this.userExists = this.check2PropertyInArray(usersArray, 'email', bodyData.email, 'password', bodyData.password);
    console.log(this.userExists);

    // If User exists we can store the user in local storage
    if (this.userExists) {
      this.isLoading = false;
      this.successMessage = "Successfully logged in";

      const response = {
        token: 'CifrOLd!K2KckPRlDA1m5cJAGlueRsL-qIHD3/=wwVg2mR2ObZn0b1WShaPhOKeirRIe36dCFWjCQ0uCZOrNw0LAYBI8Ivl?pbVnJvve0',
        userData: this.userExists,
      };

      // Navigate to the next page
      setTimeout(() => {
          this.router.navigate(["admin/dashboard"]);
      }, 1000);

      // Depending on the role we need to navigate a user to the right path

      localStorage.setItem('Token', response.token);
      localStorage.setItem('UserInfo', JSON.stringify(response.userData));

    } else {
      this.isLoading = false;
      this.errorMessage = "Bad Credentials!!"
    }

  }

  // Method to submit our data to our API
  apiCall() { }

  // Method to check if the data passed exists

  check2PropertyInArray(array: any, property: any, value: string, property2: any, value2: string) {
    for (let element of array) {
      if (element[property] === value && element[property2] === value2) {
        return element;
      }
    }
    return false;
  }


}
