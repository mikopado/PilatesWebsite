import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookingDialogComponent } from '../dialogs/booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent {
  displayedColumns: string[] = ['timeShift', 'classType', 'teacher', 'room', 'actions'];

  @Input() day: any[];
  constructor(public dialog: MatDialog) { } 

  bookClass(cls: any){
    // We need to pass ClassId whenever we get Classes so it can then pass when booking
    // to get the Date we click book and popup a dialog where to pick to date
    // UserId we can get from authentication. 
    // I need to check if isAuthenticatedUser else redirect to login
    // Show a succeffull dialog if booked or error dialog if not success,
    // Then push new classBooking to userClasses$. Maybe we need to return classBookingId when book class
    // We can use the bookClass of classService directly if we pass classId, date from html
    // and userId from AuthService, so inject AuthService in ClassesService too
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.data = cls;

    const dialogRef = this.dialog.open(BookingDialogComponent,
        dialogConfig);


    dialogRef.afterClosed().subscribe(
        val => console.log("Dialog output:", val)
        // val.date is the date picked and from here call the bookClass in class service
    );
  }
}
