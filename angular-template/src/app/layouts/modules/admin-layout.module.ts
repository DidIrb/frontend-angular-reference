import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminLayoutRoutes } from "../routes/admin-layout-routing.module";

// Import the modules

// Import components here

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AdminLayoutRoutes), // Add the routes
      HttpClientModule,

    ],
    declarations: [
        // add our components here
    ]
  })
  
  // Export the layout module
  export class AdminLayoutModule {}