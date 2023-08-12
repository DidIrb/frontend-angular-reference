import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    standalone: true,
    imports: [ReactiveFormsModule]
})

export class RegisterComponent {
    // Using Reactive Form
    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    })
    constructor(private fb: FormBuilder){}
    onSubmit(){
       console.log("form", this.form.getRawValue()); 
    }
}