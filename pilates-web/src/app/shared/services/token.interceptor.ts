import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from './authenticationService';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isAuthenticatedUser$.getValue()){
      return from(this.authService.currentAuthenticatedUser())
      .pipe(
        switchMap(
          user => {
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${user.userSession.getAccessToken().getJwtToken()}`
                }
              });
            return next.handle(request);
          }
      ));  
    }
    return next.handle(request);
      
  }
}