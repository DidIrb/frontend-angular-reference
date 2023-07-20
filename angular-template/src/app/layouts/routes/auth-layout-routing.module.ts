import { Routes } from "@angular/router";

// Components
import { SignInComponent } from "src/app/views/pages/auth/sign-in/sign-in.component";
import { SignUpComponent } from "src/app/views/pages/auth/sign-up/sign-up.component";

export const AuthLayoutRoutes: Routes = [
    // Placing routes for the Admin Layout
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
];
