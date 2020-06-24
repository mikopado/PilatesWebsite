import { Component, OnInit } from '@angular/core';
import { Card } from './models/card-type';
import { ClassType } from './models/class-type';

@Component({
    selector: 'app-yoga-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../classes-list/classes-list.component.css']
})
export class YogaTypeComponent implements OnInit {

    subtypes: Card[];
    type: ClassType;
    constructor() { }

    ngOnInit(): void {
        this.type = {title: 'Yoga', description:'sdkkamdvkamdkvm'};
        this.subtypes = [{title:'Beginner', imageUrl: '"../../../assets/logo.png"', link:''}, {title:'Intermediate', imageUrl: '"../../../assets/logo.png"', link:''}, {title:'Advanced', imageUrl: '"../../../assets/logo.png"', link:''}];
    }

}
