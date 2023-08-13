## Notes and Observations

links do not work so in order to fix it you add 

    import { RouterLink } from "@angular/router";
    
    @Component({
        // ...
        imports: [RouterLink]
    })


Found an error *No pipe found with name 'async'.* when binding our observable

    == {{isSubmitting$ | async }} ==

This occurs because we did not add common module in our standalone components to fix it we 

    import { CommonModule } from "@angular/common";

    @Component({
        // ...
        imports: [ReactiveFormsModule, RouterLink, CommonModule]
    })

**Using reducer to instead of selector**

You don't necessarily need to create selectors when working with ngrx since it can generate the selector for us itself

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


Use create action group instead of createAction

    // we need 3 effects typically
    // export const register = createAction(
    //   '[Auth] Register',
    //   props<{ request: RegisterRequestInterface }>()
    // );

    // export const registerSuccess = createAction(
    //   '[Auth] Register Success',
    //   props<{ request: RegisterRequestInterface }>()
    // );

    // export const registerFailure = createAction(
    //   '[Auth] Register Failure',
    //   props<{ request: RegisterRequestInterface }>()
    // );
