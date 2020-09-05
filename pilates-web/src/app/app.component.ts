import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './login/services/authenticationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pilates-web';  
  constructor(private authenticationService: AuthenticationService) {
    
  }
  ngOnInit(): void {
    this.authenticationService.currentAuthenticatedUser();    
  }
  
}
