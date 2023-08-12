## COMPONENTS

In this example we are going to implement authentication, that is register and login

Stand alone Components work differently let us see this in our **register** component in it we are going to work on.

### Handling forms in stand alone components

Create **auth/components/register/** :

**register.component.ts file**
    
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input type="text" formControlName="username" placeholder="Username" />
        <button type="submit">Submit</button>
    </form>

**register.component.html**

    // imports

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
            // other  values
        })
        constructor(private fb: FormBuilder){}
        onSubmit(){
        console.log("form", this.form.getRawValue()); 
        }
    }


