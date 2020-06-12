import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '' , component: SignInComponent}])
  ]
})
export class LoginModule { }
