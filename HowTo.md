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

## Using ngrx in our project

### ngrx store

Install ngrx

    npm i @ngrx/store

Create **auth/types/name.interface.ts**: Defining types
    
    export interface RegisterRequestInterface {
        user: {
            email: string
            password: string
        }
    }

Create **auth/store/action.ts** : passing in props & defining types

    // imports

    export const register = createAction(
        '[Auth] Register',
        props<{ request: RegisterRequestInterface }>()
    );

Updating **auth/components/register/register.component.ts**

    // Triggering an action in our component
    constructor(private store: Store){}
    onSubmit(){
        const request: RegisterRequestInterface  = {
            user: this.form.getRawValue(),
        }
        // Dispatching our action
        this.store.dispatch(register({request}))
    }

In order for all of this to work we need to provide ngrx store to **main.ts** as a provider

    import { provideStore } from "@ngrx/store";

    bootstrapApplication(AppComponent, {providers : [provideStore()]});

### Redux DevTools

Install Redux DevTools from chrome web store - extensions

Install ngrx store devtools

    npm i @ngrx/store-devtools

Update **main.ts** adding providers for our StoreDevTools

    import { isDevMode } from '@angular/core';
    import { provideStoreDevtools } from '@ngrx/store-devtools';
    
    bootstrapApplication(AppComponent, {
        providers: [provideStoreDevtools({
            maxAge: 25, // limit for performance
            logOnly: !isDevMode(), // only log in production
            autoPause: true, // avoid too many actions
            trace: false,
            traceLimit: 75
        })]
    });



## Notes and Observations

links do not work so in order to fix it you add 

    import { RouterLink } from "@angular/router";
    
    @Component({
        // ...
        imports: [RouterLink]
    })

