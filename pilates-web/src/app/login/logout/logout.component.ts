import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.signOut();
  }

  signOut(){
    console.log('sign out');
    this.authService.signOut()
    .then(res => { 
      console.log(this.authService.currentAuthenticatedUser());
      this.authService.isAuthenticatedUser.next(false)
      this.router.navigate(['/']);
    })
    .catch(err => console.log(err));
  }

}
