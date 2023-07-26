import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router, route: ActivatedRoute) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Get the user role from local storage or an authentication service

    const GetUserInfo: any = localStorage.getItem("UserInfo"); // get user d
    const requiredRole = next.data?.['role']; // getting role passed from the route
    const Data = JSON.parse(GetUserInfo); // perse the data and store it in a variable

    if (!this.isAuthenticated()) {
      console.log("You have not logged in so - Access Denied!!!!");
      this.router.navigate(['sign-in']); // navigate to sign in if role don't match
      return false;
    } else {  // Check if the user role matches the required role for the route
     
      const userRole = Data.role;
      console.log(userRole, requiredRole)
      // The user is logged in and so We can check their role and manage them accordingly
      // Check if the Role matches the one passed when setting up the auth guard
      if ( userRole !== requiredRole ) {  // window.history.go(-1); 
        console.log("Your role does not match the required role so - Access Denied!!!");
        return false;
      } 
    }
    return true;
  }


  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem("Token");
    // Check whether the token is expired and return // true or false
    if (token != null) { // return !this.jwtHelper.isTokenExpired(token);
      return true;
    }
    return false;
  }

}


