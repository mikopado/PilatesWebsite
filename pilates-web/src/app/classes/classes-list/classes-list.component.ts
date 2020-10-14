import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes-service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css', '../../app.component.css']
})
export class ClassesListComponent implements OnInit {

  constructor(public readonly classesService: ClassesService) { 
  }

  ngOnInit(): void {
    this.classesService.getClassList()
    .subscribe(res =>{ this.classesService.classesList$.next(res); }); 
  }

}
