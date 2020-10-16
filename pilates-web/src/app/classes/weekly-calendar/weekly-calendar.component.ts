import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-calendar',
  templateUrl: './weekly-calendar.component.html',
  styleUrls: ['./weekly-calendar.component.css', '../../app.component.css']
})
export class WeeklyCalendarComponent implements OnInit {
  classType: string;
  constructor(public readonly classService : ClassesService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.classType = this.route.snapshot.params.type;
    this.classService.getWeeklyTimetable(this.classType);   
  }

    
}
