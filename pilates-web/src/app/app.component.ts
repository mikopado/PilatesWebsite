import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authenticationService';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './core/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pilates-web';  
  constructor(
    private authenticationService: AuthenticationService, 
    private httpClient: HttpClient, 
    private configService: AppConfigService) {
    // To Warm up the Lambda Api
    this.httpClient.get(this.configService.settings.apiUrl + '/api/Health')
    .subscribe();
  }
  
  ngOnInit(): void {
    this.authenticationService.currentAuthenticatedUser();  
  }
  
}
