import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  loading: boolean = false;
  @Input() day: IWeekPlan;
  constructor(public dialog: MatDialog, private userService: UserService) { } 

  bookClass(day: string, cls: any){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {day: day, cls: cls};

    const dialogRef = this.dialog.open(BookingDialogComponent,
        dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => {
        if (val !== undefined) {
          this.loading = true;
          this.userService.bookClass(cls.classId, val.date)
            .pipe(
              map(r => {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = true;
                this.dialog.open(SuccessDialogComponent, dialogConfig);
                this.loading = false;
              }),
              catchError(err => {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = true;
                dialogConfig.data = err.error.message;
                this.dialog.open(FailDialogComponent, dialogConfig);
                this.loading = false;
                return throwError(err);
              })
            ).subscribe()
        }
      }
    )

  }
}
