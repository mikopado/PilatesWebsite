import { Component, OnInit } from '@angular/core';
import { Subtype } from './models/subtype';

@Component({
    selector: 'app-yoga-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css']
})
export class YogaTypeComponent implements OnInit {

    subtypes: Subtype[];
    type: string;
    constructor() { }

    ngOnInit(): void {
        this.type = 'Yoga';
    }

}
