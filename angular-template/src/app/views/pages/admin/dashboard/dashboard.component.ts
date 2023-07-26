import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: users | undefined;
  report: { allUsers: number; Admins: number; Users: number; } | undefined;

  constructor(private router: Router, private localService: LocalService) { }

  // Getting user Details and showing it
  ngOnInit(): void {
    this.userData = this.localService.checkStatus(); // checking if logged in and shows data other wise logs you out
    // Go to local service and get the reports
    this.report = this.localService.getUsersReports()
  }

  // Get list of all users


  // How to add protection to an individual component // check The service for how to protect groups of components

  // Logging user out from here has been removed it has been moved to the local service

  //  Removed the logout method and transferred it to the right place
}
