import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css']
})
export class WeeklyCalendarComponent implements OnInit {

  week: any[][];
  constructor() { }

  ngOnInit(): void {
    this.week = [
      [
      {'timeshift': '15.00-18.00', 'classType': 'Yoga', 'teacher': 'Robbie', 'room': 'A3'},
      {'timeshift': '12.00-13.00', 'classType': 'Pilates', 'teacher': 'Minnie', 'room': 'B3'}
    ], 
      [{'timeshift': '11.00-13.00', 'classType': 'Pilates', 'teacher': 'Carl', 'room': 'A1'}]  
    ]
  }

}
