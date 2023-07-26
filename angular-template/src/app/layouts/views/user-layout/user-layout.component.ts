import { Component } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class  UserLayoutComponent {

  // Adding constructor
  constructor(private localService: LocalService) { }

  // Logging user out through service
  signOut() {
    this.localService.logout();
  }
    
}
