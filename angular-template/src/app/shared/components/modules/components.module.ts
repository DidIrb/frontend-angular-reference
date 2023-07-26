// Import the modules
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Import components here
import { NavbarComponent } from "../layouts/navbar/navbar.component";
import { SidebarComponent } from "../layouts/sidebar/sidebar.component";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      RouterModule,
    ],

    // Importing the needed components
    declarations: [
      NavbarComponent,
      SidebarComponent,
    ],

    // Exporting the components // sharing components
    exports: [
      NavbarComponent,
      SidebarComponent
    ]
  })
  
  // Export the Component module class to use it in other components
  export class ComponentsModule {}