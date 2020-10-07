import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { YogaTypeComponent } from './class-type/yoga-type.component';
import { PilatesTypeComponent } from './class-type/pilates-type.component';
import { ComboTypeComponent } from './class-type/combo-type.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { DayCalendarComponent } from './weekly-calendar/day-calendar/day-calendar.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClassesService } from './classes-service';
import { MatDialogModule } from '@angular/material/dialog';
import { BookingDialogComponent } from './weekly-calendar/dialogs/booking-dialog/booking-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { SuccessDialogComponent } from './weekly-calendar/dialogs/success-dialog/success-dialog.component';
import { FailDialogComponent } from './weekly-calendar/dialogs/fail-dialog/fail-dialog.component';


@NgModule({
  declarations: [ClassesListComponent, YogaTypeComponent, PilatesTypeComponent, ComboTypeComponent, WeeklyCalendarComponent, DayCalendarComponent, BookingDialogComponent, SuccessDialogComponent, FailDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [ClassesService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class ClassesModule { }
