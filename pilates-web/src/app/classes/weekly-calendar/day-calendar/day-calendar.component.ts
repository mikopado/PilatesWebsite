import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/spinner.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IClassTimetable, IWeekPlan } from '../../class-type/models/week-plan';
import { BookingDialogComponent } from '../dialogs/booking-dialog/booking-dialog.component';
import { FailDialogComponent } from '../dialogs/fail-dialog/fail-dialog.component';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent {
  displayedColumns: string[] = ['timeShift', 'teacher', 'room', 'level', 'actions'];
 
  @Input() day: IWeekPlan;
  constructor(public dialog: MatDialog, private userService: UserService, private spinnerService: SpinnerService) { } 

  bookClass(day: string, cls: IClassTimetable){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {day: day, cls: cls};
    const userMemb = this.userService.userMembership$.getValue();
    if(userMemb === null){
      dialogConfig.data = {message: "You haven't purchased any memberships yet!"};
      this.dialog.open(FailDialogComponent,
        dialogConfig);
    }
    else if(userMemb.classType !== cls.classType){
      dialogConfig.data = {message: "Your membership doesn't allow to book this type of class"};
      this.dialog.open(FailDialogComponent,
        dialogConfig);
    }
    else{
      const dialogRef = this.dialog.open(BookingDialogComponent,
        dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => {
        if (val !== undefined) {
          this.spinnerService.startLoading();
          this.userService.bookClass(cls.classId, val.date)
            .pipe(
              finalize(() => this.spinnerService.stopLoading()),
              map(r => {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = true;
                this.dialog.open(SuccessDialogComponent, dialogConfig);
              }),
              catchError(err => {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = true;
                dialogConfig.data = {message: err.error.message, default: true};
                this.dialog.open(FailDialogComponent, dialogConfig);
                return throwError(err);
              })
            ).subscribe()
        }
      }
    )
    }


  }
}
