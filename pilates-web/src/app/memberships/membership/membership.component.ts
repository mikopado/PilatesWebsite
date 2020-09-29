import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ClassType, IRegisterMember, IUserMembership } from 'src/app/shared/interfaces';
import { AuthenticationService } from 'src/app/shared/services/authenticationService';
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
  justRegistered = false;
  alreadyMember = false;

  constructor(private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private membershipService: MembershipsService,
    private userService: UserService,
    private authService: AuthenticationService
    ) { 
  }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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

    this.checkMember();
  }

  private checkMember(){
    this.userService.userMember$.subscribe(user => this.memberForm.patchValue({ ...user }));
    this.userService.userMembership$.subscribe(x => this.alreadyMember = true);    
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
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      membershipId: this.membershipId,
      userId: this.user.sub
    } as IRegisterMember
    this.userService.registerUserMember(member, this.user.email, this.membership) 
      .pipe(
        tap(c => {this.justRegistered = true; this.loading = false;}),
        catchError(err => { this.loading = false; this.error = err.message; return of() })
        )
        .subscribe();          
  }

}
