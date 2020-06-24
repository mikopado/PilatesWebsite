import { Component, OnInit } from '@angular/core';
import { Card } from './models/card-type';
import { ClassType } from './models/class-type';

@Component({
    selector: 'app-combo-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../classes-list/classes-list.component.css']
})
export class ComboTypeComponent implements OnInit {

    subtypes: Card[];
    type: ClassType;
    constructor() { }

    ngOnInit(): void {
        this.type = {title: 'Combo', description:'sdvsmdklvmskmdkmkmd'};
        this.subtypes = [{title:'Beginner', imageUrl: '"../../../assets/logo.png"', link:''}, {title:'Intermediate', imageUrl: '"../../../assets/logo.png"', link:''}, {title:'Advanced', imageUrl: '"../../../assets/logo.png"', link:''}];

    }

}
