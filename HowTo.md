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

### Reducers

This is just a function where we define how action are changing in our states.

create interface **src/app/auth/types/authState.interface.ts**

    export interface AuthStateInterface {
        isSubmitting: boolean
    }

create auth reducer **src/app/auth/store/reducers.ts**
    
**NEEDS BETTER EXPLANATIONS**

    // imports
    
    const initialState: AuthStateInterface = {
        isSubmitting: false
    }

    const authFeature = createFeature({
        name: 'auth',
        reducer: createReducer(
            initialState,
            on(register, (state) => ({...state, isSubmitting: true}))
        ),
    })

    export const {name: authFeatureKey, reducer: authReducer} = authFeature

Update **main.ts** in order to manage states better

    import { provideState, provideStore } from '@ngrx/store';
    import { authFeatureKey, authReducer } from './app/auth/store/reducers';

    bootstrapApplication(AppComponent, {
        providers: [ provideState(authFeatureKey, authReducer)],
    });

### Selectors - 

In order to pass the data into our component we use Selectors


create **src/app/auth/store/selector.ts** 

    import { createSelector } from "@ngrx/store";
    import { AuthStateInterface } from "../types/authState.interface";

    export const selectFeature = (state: {auth: AuthStateInterface}) => state.auth

    export const selectIsSubmitting = createSelector(
        selectFeature,
        (state) => state.isSubmitting
    )

using it in our component

    import { selectIsSubmitting } from "../../store/selectors";
    import { AuthStateInterface } from "../../types/authState.interface";

    export class RegisterComponent {
        isSubmitting$ = this.store.select(selectIsSubmitting) // observable
        constructor(private store: Store<{auth: AuthStateInterface}> ){}
    }

**you can use ngrx without it**

Update the reducer instead in **src/app/auth/store/reducer.ts** 
    
    // ...

    export const {
        // ...
        selectIsSubmitting,
    } = authFeature;

using it in our component

    import { selectIsSubmitting } from "../../store/reducers";
    // ...
    export class RegisterComponent {
        isSubmitting$ = this.store.select(selectIsSubmitting) //...
    }

### Services to handle API calls

create interface **src/app/auth/types/authResponse.interface.ts**  for response 
    
    export interface AuthResponseInterface {
    user: CurrentUserInterface 
    }

create **src/app/auth/services/auth.service.ts** 

    // imports
    @Injectable({ providedIn: 'root' })
    export class AuthService {
        
        constructor(private http: HttpClient) {}
        register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
            const url = environment.apiUrl + '/users'
            return this.http.post<AuthResponseInterface>(url, data)
            .pipe(map((response) => response.user));
        }
    }
In order for this to work you need to update **main.ts**

    import { provideHttpClient } from '@angular/common/http';

    bootstrapApplication(AppComponent, {
    providers: [ provideHttpClient()],
    });
## Setting up the environment variable in angular

Generating Environment variables

    npx -p @angular/cli@15 ng generate environments

defining our environment variables

    export const environment = {
        apiUrl:  'https://api.realworld.io/api',
    };


### EFFECTS

Installing effects 

    npm i @ngrx/effects

update **./auth/store/actions.ts**

    import { createActionGroup, emptyProps, props } from '@ngrx/store';

    export const authActions = createActionGroup({
        source: 'auth',
        events: {
            Register: props<{ request: RegisterRequestInterface }>(),
            'Register success': props<{ currentUser: CurrentUserInterface }>(),
            'Register Failure': emptyProps(),
        },
    });

To reduce the amount of code written you can write an actionGroup instead, and define multiple actions.

create **src/app/auth/store/effects.ts** 

    // imports

    export const registerEffect = createEffect(
    (actions$ = inject(Actions), authService = inject(AuthService)) => {
        return actions$.pipe(
        ofType(authActions.register),
        switchMap(({ request }) => {
            return authService.register(request).pipe(
            map((currentUser: CurrentUserInterface) => {
                return authActions.registerSuccess({ currentUser });
            }),
            catchError(() => {
                return of(authActions.registerFailure());
            })
            );
        })
        );
    },  { functional: true }
    );


update **./auth/store/reducer.ts**

    import { authActions } from './action';

    const authFeature = createFeature({
        name: 'auth',
        reducer: createReducer(
            initialState,
            on(authActions.register, (state) => ({ ...state, isSubmitting: true }))
        ),
    });

update component

    import { authActions } from '../../store/action';

    export class RegisterComponent { 
        // ....
        onSubmit() { // .... 
            this.store.dispatch(authActions.register({ request }));
        }
    }


You need to provide effects in **main.ts**

    import { provideEffects } from '@ngrx/effects';
    import * as authEffects from "./app/auth/store/effects";

    bootstrapApplication(AppComponent, {
    providers: [ provideEffects(authEffects)],
    });

