import { Component, OnInit } from '@angular/core';
import { IWeekPlan } from '../class-type/models/week-plan';
import { ClassesService } from '../classes-service';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css', '../../app.component.css']
})
export class WeeklyCalendarComponent implements OnInit {

  week: IWeekPlan[];
  constructor(public readonly classService : ClassesService) { }

  ngOnInit(): void {
    this.classService.getWeeklyTimetable();
    console.log(this.classService.weeklyTimetable$);
    // this.week = [
    //   { day: 'Monday', lessons: [{ 'timeshift': '15.00-18.00', 'lessonType': 'Yoga', 'teacher': 'Robbie', 'room': 'A3' }, { 'timeshift': '12.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Minnie', 'room': 'B3' }] },
    //   { day: 'Tuesday', lessons: [{ 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }, { 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }] },
    //   { day: 'Wednesday', lessons: [{ 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }, { 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }] },
    //   { day: 'Thursday', lessons: [{ 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }, { 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }] },
    //   { day: 'Friday', lessons: [{ 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }, { 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }] },
    //   { day: 'Saturday', lessons: [{ 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }, { 'timeshift': '11.00-13.00', 'lessonType': 'Pilates', 'teacher': 'Carl', 'room': 'A1' }] },
    // ]
    // console.log(this.week);
  }

}
