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
    path: 'classes', 
    component: ClassesListComponent,
    data: {
      title: 'Classes',
      icon: 'class',
      isLogin: true
    }
  },
  {
    path: '', 
    component: PageNotFoundComponent,
    data: {
      title: 'Book',
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
  { path: 'classes/yoga', component: YogaTypeComponent},
  { path: 'classes/pilates', component: PilatesTypeComponent },
  { path: 'classes/combo', component: ComboTypeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
