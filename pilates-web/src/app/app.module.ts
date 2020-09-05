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
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/services/data.service';
import { AuthenticationService } from './login/services/authenticationService';
import { AuthGuardService } from './shared/services/auth-guard.service';

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
    BrowserAnimationsModule
  ],
  providers: [
    AppConfigService,
    { 
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigService], 
      multi: true 
    },
    DataService,
    AuthenticationService,
    AuthGuardService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
