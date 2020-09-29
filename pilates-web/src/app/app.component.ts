import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authenticationService';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from './core/app-config.service';
import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';
import { map } from 'rxjs/operators';
import { ClassType, IMember, IMembership, IUserMembership } from './shared/interfaces';
import { MembershipType } from './memberships/models/membership-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService, 
    private httpClient: HttpClient, 
    private configService: AppConfigService,
    private dataService: DataService,
    private userService: UserService) {
    // To Warm up the Lambda Api
    this.httpClient.get(this.configService.settings.apiUrl + '/api/Health').subscribe();
  }
  
  ngOnInit(): void {
    this.authenticationService.currentAuthenticatedUser()
    .then(res => { 
      this.authenticationService.isAuthenticatedUser$.next(res.isAuthenticated);
      this.dataService.getUser(res.userAttributes.sub).pipe(  
        map(user => { 
          this.getUserMembership(user.result.membership);
          this.userService.userClasses$.next(user.result.classes);
          if(user.result.member !== undefined){
            this.userService.userMember$.next({
              ...user.result.member,
              email: user.result.user.email
            } as IMember)
          }else{
            this.userService.userMember$.next({
              email: user.result.user.email
            } as IMember)
          }              
        })
      ).subscribe()    
    });  
  }
  
  private getUserMembership(membership: IMembership) {
    if(membership !== undefined){
      this.userService.userMembership$.next(
        {
          ...membership,
          type: MembershipType[membership.type],
          classType: ClassType[membership.classType],
          period: ''
        } as IUserMembership
      );
    }   
  }

}
