import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesListComponent } from './classes/classes-list/classes-list.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { HomepageComponent } from './home/homepage.component';
import { YogaTypeComponent } from './classes/class-type/yoga-type.component';
import { PilatesTypeComponent } from './classes/class-type/pilates-type.component';
import { ComboTypeComponent } from './classes/class-type/combo-type.component';
import { MembershipListComponent } from './memberships/membership-list/membership-list.component';
import { WeeklyCalendarComponent } from './classes/weekly-calendar/weekly-calendar.component';
import { ClassResolver } from './classes/classes.resolver';
import { MembershipsResolver } from './memberships/memberships.resolver';


const routes: Routes = [
  {
    path: 'home', 
    component: HomepageComponent,
    data: {
      title: 'Home',
      icon: 'home',
      isLogin: true

    }
  }, 
  {
    path: 'about', 
    component: PageNotFoundComponent,
    data: {
      title: 'About',
      icon: 'home',
      isLogin: true

    }
  },  
  {
    path: 'classes', 
    component: ClassesListComponent,
    data: {
      title: 'Classes',
      icon: 'class',
      isLogin: true      
    },
    resolve: {
      data: ClassResolver
    }
  },
  {
    path: 'memberships', 
    component: MembershipListComponent,
    data: {
      title: 'Membership',
      icon: 'class',
      isLogin: true
    },
    resolve:{
      data: MembershipsResolver
    }
  },
  {
    path: 'contactus', 
    component: PageNotFoundComponent,
    data: {
      title: 'Contact Us',
      icon: 'class',
      isLogin: true
    }
  },
  {
    path: 'login', 
    component: SignInComponent, 
    data: {
      title: 'Login',
      icon: 'login',
      isLogin: true
    }
  },
  { path: 'classes/yoga', component: YogaTypeComponent, resolve: {data: ClassResolver}},
  { path: 'classes/pilates', component: PilatesTypeComponent, resolve: {data: ClassResolver} },
  { path: 'classes/combo', component: ComboTypeComponent, resolve: {data: ClassResolver} },
  { path: 'classes/weeklycalendar', component: WeeklyCalendarComponent, resolve: {data: ClassResolver} },
  { path: 'signup', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ClassResolver, MembershipsResolver]
})
export class AppRoutingModule { }
