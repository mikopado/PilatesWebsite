import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'src/app/login/services/authenticationService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  async canActivate(): Promise<boolean> {
    const user = await this.auth.currentAuthenticatedUser();
    if (!user.isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}