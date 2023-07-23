import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersArray } from 'src/app/db/usersdb';
import { Environment } from 'src/app/environments/env';
import { response } from 'src/app/models/response';
import { users } from 'src/app/models/users';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  usersList: users[] | undefined ;
  
  // Filter Methods

  Form!: FormGroup; // You have to add ! to prevent an error
  isLoading: boolean = false;
  userExists: boolean | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  response: response | undefined;
  view: string = "list";
  idx: any;

  // securePasswordPatter: string = ; // use this for checking how secure the password is 

  constructor(private fb: FormBuilder, private localService: LocalService) { }

  // Method to run on initialization of form!
  ngOnInit() {
    // Protecting route
    this.localService.checkStatus();
    // Getting list of users
    this.usersList = usersArray;
    console.log(this.usersList);

    // Building Forms
    this.Form = this.fb.group(
      {
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        role: ['', [Validators.required]],
      });
  }

  toggleView(data: string) {
    this.view = data;
  }
  edit(data: any, idx: any) {
    this.view = "edit";
    this.Form.patchValue(data)
    this.idx = idx;
  }

  // Constructing our form
  onSubmit(Form: FormGroup) {

    this.isLoading = true;

    const bodyData = {
      first_name: Form.value.first_name,
      last_name: Form.value.last_name,
      email: Form.value.email,
      username: Form.value.username,
      // password: Form.value.password,
      role: Form.value.role,
    };

    // If the base does not exist we are assuming you have no backend working
    if (Environment.BASE) {
      this.apiCall();
    } else {
      setTimeout(() => {  // Simulate waiting for response from an api 
        this.localSUbmit(bodyData);
      }, 3000);
    }
  }

  localSUbmit(bodyData: users) {
    // Checking if it is create or update
    if(this.view !== "create") {
      this.response = this.localService.post(bodyData, this.idx);
    } else {
      this.response = this.localService.post(bodyData, "create");
    }
    this.isLoading = false;

    if(this.response?.status === 200) {
      setTimeout(() => {  
        this.view = "list";
      }, 3000);
    } else {
      this.view = "create";
    }
  }

  // Method to submit our data to our API
  apiCall() { }



}
