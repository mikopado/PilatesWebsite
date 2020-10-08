import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ClassType, IClassBooking } from '../shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClassTimetable, DayOfWeek } from '../classes/class-type/models/week-plan';
import { map, skipWhile, tap } from 'rxjs/operators';

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
      this.getBookingClasses(this.userService.userClasses$);
      this.userService.userMember$.subscribe(user => this.editUserForm.patchValue({...user}));
  } 
  

  private getBookingClasses(classes: BehaviorSubject<IClassBooking[]>) {
    if (classes !== null) {
      classes.pipe(
        skipWhile(value => !value),
        map(arr =>
          arr.sort((a, b) => a.date.valueOf() - b.date.valueOf())
            .map(
              cls =>
                ({
                  classType: ClassType[cls.type],
                  room: cls.room,
                  teacher: cls.teacher.firstName.concat(' ', cls.teacher.lastName),
                  timeslot: cls.startingTime.slice(0, cls.startingTime.lastIndexOf(':')).concat(' - ', cls.endingTime.slice(0, cls.endingTime.lastIndexOf(':'))),
                  date: new Date(cls.date).toDateString().slice(0, new Date(cls.date).toDateString().lastIndexOf(' ')),
                  classId: cls.id
                } as IClassTimetable)
            ))).subscribe(c =>{ this.classesBooked$.next(c)} )
    }
  }

  cancelClassBooking(classBookingId: string){
    this.userService.cancelClassBooking(classBookingId)
    .pipe(
      map(m => this.getBookingClasses(this.userService.userClasses$))
    ).subscribe()
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    // stop here if form is invalid
    if (this.editUserForm.invalid) {
      return;
    }
  }
  
}
