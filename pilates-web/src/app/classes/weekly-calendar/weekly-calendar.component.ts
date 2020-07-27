import { Component, OnInit } from '@angular/core';
import { IWeekPlan, IClassTimetable } from '../class-type/models/week-plan';
import { ClassesService } from '../classes-service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css', '../../app.component.css']
})
export class WeeklyCalendarComponent implements OnInit {

  constructor(public readonly classService : ClassesService) { }

  ngOnInit(): void {
    this.classService.getWeeklyTimetable();    
    
  }

    
}
