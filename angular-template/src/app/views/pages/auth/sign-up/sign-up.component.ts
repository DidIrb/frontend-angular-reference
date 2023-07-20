import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Environment } from 'src/app/environments/env';
import { response } from 'src/app/models/response';
import { users } from 'src/app/models/users';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  Form!: FormGroup; // You have to add ! to prevent an error
  isLoading: boolean = false;
  userExists: boolean | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  response: response | undefined;

  // securePasswordPatter: string = ; // use this for checking how secure the password is 

  constructor(private fb: FormBuilder, private localService: LocalService) { }

  // Method to run on initialization of form!
  ngOnInit() {
    this.Form = this.fb.group(
      {
        first_name: ['', [Validators.required]],
        last_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required]], // , Validators.pattern(this.securePasswordPatter)] // how to check pattern
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator });
  }

  // Constructing our form
  onSubmit(Form: FormGroup) {

    this.isLoading = true;

    const bodyData = {
      first_name: Form.value.first_name,
      last_name: Form.value.last_name,
      email: Form.value.email,
      username: Form.value.username,
      password: Form.value.password,
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
    this.response = this.localService.post(bodyData);
    this.isLoading = false;
  }

  // Method to submit our data to our API
  apiCall() { }

  // Checking if password matches
  passwordMatchValidator(control: AbstractControl) {
    // Get the password and confirm password fields
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    // If both fields are valid and have the same value, return null
    if (password?.valid && confirmPassword?.valid && password.value === confirmPassword.value) {
      return null;
    }
    // Otherwise, return an error object
    return { passwordMismatch: true };
  }

}


