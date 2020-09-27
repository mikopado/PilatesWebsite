import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ClassType, IMembership, IRegisterMember, IUserMembership } from 'src/app/shared/interfaces';
import { AuthenticationService } from 'src/app/shared/services/authenticationService';
import { DataService } from 'src/app/shared/services/data.service';
import { UserService } from 'src/app/shared/services/user.service';
import { MembershipsService } from '../memberships.service';
import { MembershipType } from '../models/membership-type';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  memberForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  membership: IUserMembership;
  membershipId: string;
  user: any; 

  constructor(private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private membershipService: MembershipsService,
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({     
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      dob: ['', Validators.required]
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.membershipId = params.get('id');
      this.membershipService.memberships$.pipe(
        map(m => { 
      const membership = m.find(b => b.id === this.membershipId);
      this.membership = {
        ...membership,
        classType: ClassType[membership.classType],
        type: MembershipType[membership.type],
        period: this.toMonth(membership.days)
      }
    })
      ).subscribe();
    });

    this.authService.currentAuthenticatedUser()
    .then(u => this.user = u.userAttributes);
  }

  private toMonth(days: number){
    if(days === 1) return `${days} Day`;
    const month = Math.floor(days / 30);
    if(month > 1) return `${month} Months`;
    if(month > 0) return `${month} Month`;
    else return `${days} Days`;
  }

  get f() { return this.memberForm.controls; };
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.memberForm.invalid) {
      return;
    }

    this.loading = true;
    const member = {
      address: this.f.address.value,
      city: this.f.city.value,
      dob: this.f.dob.value,
      firstName: this.f.firstname.value,
      lastName: this.f.lastname.value,
      membershipId: this.membershipId,
      userId: this.user.sub
    } as IRegisterMember
    this.userService.registerUserMember(member, this.user.email, this.membership) 
      .pipe(
        tap(c => {this.router.navigate(['/']); this.loading = false;}),
        catchError(err => { this.loading = false; this.error = err.message; return of() })
        )
        .subscribe();          
  }

}
