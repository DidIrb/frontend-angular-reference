import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  
  // Declaring a variable and defining it
  message: string = "Resource Not Found!!!";

  // Creating methods
  navigateBack() {
    window.history.go(-1); return false;
  }
  
}
