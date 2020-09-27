import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authenticationService';
import { DataService } from 'src/app/shared/services/data.service';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { ClassType, IMembership, IUserMembership } from 'src/app/shared/interfaces';
import { MembershipType } from 'src/app/memberships/models/membership-type';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';  

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dataService: DataService,
    private userService: UserService
  ) {    
  }

  ngOnInit() {   
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.signIn(this.f.username.value, this.f.password.value)
    .then((user) => {
      this.dataService.getUser(user.attributes.sub)
      .pipe(
        map(res =>  { 
          this.userService.userMember$.next({ ...res.result.member, email: res.result.user.email });
          this.getUserMembership(res.result.membership);
          this.userService.userClasses$.next(res.result.classes);
          this.loading = false;
          this.router.navigate([this.returnUrl]); 
        } )
      )
      .subscribe();   
    })
    .catch(err => {
      this.error = err.message;
      this.loading = false;
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

  logOut() {    
    this.authenticationService.signOut()
    .then(resp => {
      this.router.navigate([this.returnUrl]);
    })
    .catch(err => {
      console.log(err);
    });
  }

}
