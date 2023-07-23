import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminLayoutRoutes } from "../routes/admin-layout-routing.module";
import { DashboardComponent } from "src/app/views/pages/admin/dashboard/dashboard.component";
import { UsersComponent } from "src/app/views/pages/admin/users-list/users.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Import the modules

// Import components here

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AdminLayoutRoutes), // Add the routes
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule

    ],
    declarations: [
        // add our components here
        DashboardComponent,
        UsersComponent
    ]
  })
  
  // Export the layout module
  export class AdminLayoutModule {}