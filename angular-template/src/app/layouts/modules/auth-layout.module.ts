import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Routes
import { AuthLayoutRoutes } from "../routes/auth-layout-routing.module";

// Components
import { SignInComponent } from "src/app/views/pages/auth/sign-in/sign-in.component";
import { SignUpComponent } from "src/app/views/pages/auth/sign-up/sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// Import the modules

// Import components here

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AuthLayoutRoutes), // Add the routes
      HttpClientModule,
      // We need this module in order to use <form [formGroup]="Form" >
      FormsModule,
      ReactiveFormsModule,

    ],
    declarations: [
        // add our components here
        SignInComponent,
        SignUpComponent,
    ]
  })
  
  // Export the layout module
  export class AuthLayoutModule {}