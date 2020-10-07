import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { ClassType, IClassBooking } from '../shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClassTimetable, DayOfWeek } from '../classes/class-type/models/week-plan';
import { map } from 'rxjs/operators';

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
      this.getBookingClasses(this.userService.userClasses$.getValue());
      this.userService.userMember$.subscribe(user => this.editUserForm.patchValue({...user}));
  } 
  

  private getBookingClasses(classes: IClassBooking[]){
    if(classes !== null && classes.length > 0){
      this.classesBooked$.next(
        classes
        .sort((a, b) => a.date.valueOf() - b.date.valueOf())
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
        ))
    }    
  }

  cancelClassBooking(classBookingId: string){
    this.userService.cancelClassBooking(classBookingId)
    .pipe(
      map(m => this.getBookingClasses(this.userService.userClasses$.getValue()))
    ).subscribe()
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editUserForm.invalid) {
      return;
    }
  }
  
}
