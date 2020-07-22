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
import { MembershipListComponent } from './memberships/membership-list/membership-list.component';
import { MembershipModule } from './memberships/membership.module';
import { AppConfigService } from './core/app-config.service';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    ClassesModule,
    LoginModule,
    MembershipModule,  
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigService], 
      multi: true 
    }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
