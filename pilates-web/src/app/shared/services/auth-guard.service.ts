import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authenticationService';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticatedUser) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}