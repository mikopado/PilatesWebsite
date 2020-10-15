import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesModule } from './classes/classes.module';
import { CoreModule, appInitializer } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './home/homepage.module';
import { MembershipModule } from './memberships/membership.module';
import { AppConfigService } from './core/app-config.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './shared/services/data.service';
import { AuthenticationService } from './shared/services/authenticationService';
import { AuthGuard } from './shared/services/auth-guard.service';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { MyProfileModule } from './my-profile/my-profile.module';
import { UserService } from './shared/services/user.service';
import { AboutModule } from './about/about.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomepageModule,
    ClassesModule,
    LoginModule,
    MembershipModule,  
    BrowserAnimationsModule,
    MyProfileModule,
    AboutModule,
    ContactUsModule
  ],
  providers: [
    AppConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigService], 
      multi: true 
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    DataService,
    AuthGuard,
    AuthenticationService, 
    UserService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
