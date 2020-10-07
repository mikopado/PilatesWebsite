import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';
import { IWeekPlan } from '../../class-type/models/week-plan';
import { BookingDialogComponent } from '../dialogs/booking-dialog/booking-dialog.component';
import { FailDialogComponent } from '../dialogs/fail-dialog/fail-dialog.component';
import { SuccessDialogComponent } from '../dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent {
  displayedColumns: string[] = ['timeShift', 'classType', 'teacher', 'room', 'actions'];

  @Input() day: IWeekPlan;
  constructor(public dialog: MatDialog, private userService: UserService) { } 

  bookClass(day: string, cls: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {day: day, cls: cls};

    const dialogRef = this.dialog.open(BookingDialogComponent,
        dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => this.userService.bookClass(cls.classId, val.date)
        .then(r => {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
      
          this.dialog.open(SuccessDialogComponent, dialogConfig);
        })
        .catch(err => {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.data = err.message;
          this.dialog.open(FailDialogComponent, dialogConfig);
        })
    );
  }
}
