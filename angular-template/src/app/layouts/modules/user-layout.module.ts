import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DocumentsComponent } from "src/app/views/pages/users/documents/documents.component";
import { UserLayoutRoutes } from "../routes/user-layout-routing.module";

// Import the modules

// Import components here

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(UserLayoutRoutes), // Add the routes
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      

    ],
    declarations: [
        // add our components here
        DocumentsComponent,
    ]
  })
  
  // Export the layout module
  export class UserLayoutModule {}