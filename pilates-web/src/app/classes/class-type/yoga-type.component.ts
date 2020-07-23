import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes-service';

@Component({
    selector: 'app-yoga-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../../app.component.css']
})
export class YogaTypeComponent implements OnInit {

    constructor(public readonly classService: ClassesService) { }

    ngOnInit(): void {
        this.classService.getClassTypeDetails('Yoga');
    }

}
