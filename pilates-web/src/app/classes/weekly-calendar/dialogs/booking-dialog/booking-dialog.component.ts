import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DayOfWeek } from 'src/app/classes/class-type/models/week-plan';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css']
})
export class BookingDialogComponent implements OnInit {
  form: FormGroup;
  minDate: Date;
  maxDate: Date;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = fb.group({
      date: ['', Validators.required],
    });
    this.minDate = new Date();
    this.maxDate = new Date(this.minDate.getFullYear() + 1, 11, 31);
  }
 
  ngOnInit(): void {   
  }

  book() {
    this.dialogRef.close(this.form.value);
  }

  cancel() {
    this.dialogRef.close();
  }

  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    const dayOfClass = parseInt(DayOfWeek[this.data.day]);
    return day === dayOfClass;
  }
}
