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
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [ClassesListComponent, YogaTypeComponent, PilatesTypeComponent, ComboTypeComponent, WeeklyCalendarComponent, DayCalendarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class ClassesModule { }
