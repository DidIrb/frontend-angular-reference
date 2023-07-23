import { Component } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class  AdminLayoutComponent {

  // Adding constructor
  constructor(private localService: LocalService) { }

  // Logging user out through service
  signOut() {
    this.localService.logout();
  }
    
}
