import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/models/card-type';
import { ClassesService } from '../classes-service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-combo-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../../app.component.css']
})
export class ComboTypeComponent implements OnInit {

    constructor(public readonly classService: ClassesService) { }

    ngOnInit(): void {
        this.classService.getClassTypeDetails('Combo');
    }

}
