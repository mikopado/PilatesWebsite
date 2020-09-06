import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent {
  displayedColumns: string[] = ['timeShift', 'classType', 'teacher', 'room', 'actions'];

  @Input() day: any[];
  constructor() { } 

}
