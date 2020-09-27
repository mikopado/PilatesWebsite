import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { IUser, IMember, IMembership, IClass, ClassType, IUserMembership } from '../shared/interfaces';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../shared/services/authenticationService';
import { DataService } from '../shared/services/data.service';
import { from, BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClassTimetable, DayOfWeek } from '../classes/class-type/models/week-plan';
import { MembershipType } from '../memberships/models/membership-type';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  editUserForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';  
  isEdit = false;
  public classesBooked$ = new BehaviorSubject<IClassTimetable[]>(null);

  constructor(
    public userService: UserService, 
    private authService: AuthenticationService, 
    private dataService: DataService,
    private formBuilder: FormBuilder) { }

  get f() { return this.editUserForm.controls; }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      dob: [''],
      email:['', Validators.required]      
    });

    this.initializeUserDetails();    
  }

  private initializeUserDetails() {
    //if(this.userService.userMember$.getValue() === null){
      from(this.authService.currentAuthenticatedUser()).pipe(
        map(res =>
        this.dataService.getUser(res.userAttributes.sub).pipe(  
            map(user => { 
              this.getUserMembership(user.result.membership);
              this.userService.userClasses$.next(user.result.classes);
              this.getBookingClasses(user.result.classes);
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
              this.editUserForm.patchValue({...this.userService.userMember$.getValue()});
            })
          ).subscribe()
        )
      ).subscribe();
    // }else{
    //   this.getBookingClasses(this.userService.userClasses$.getValue());
    //   this.getUserMembership(this.userService.userMembership$.getValue());
    //   this.editUserForm.patchValue({...this.userService.userMember$.getValue()});      
    // }    
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

  private getBookingClasses(classes: IClass[]){
    if(classes.length > 0){
      this.classesBooked$.next(
        classes
        .sort((a, b) => a.weekDay - b.weekDay)
        .map(
            cls =>          
              ({
                classType: ClassType[cls.type],
                room: cls.room,
                teacher: cls.teacher.firstName.concat(' ', cls.teacher.lastName),
                timeslot: cls.startingTime.slice(0, cls.startingTime.lastIndexOf(':')).concat(' - ', cls.endingTime.slice(0, cls.endingTime.lastIndexOf(':'))),
                day: DayOfWeek[cls.weekDay]
            } as IClassTimetable)
        ))
    }    
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editUserForm.invalid) {
      return;
    }
  }
  
}
