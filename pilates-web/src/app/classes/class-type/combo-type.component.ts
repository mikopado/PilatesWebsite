import { Component, OnInit } from '@angular/core';
import { Subtype } from './models/subtype';

@Component({
    selector: 'app-combo-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../classes-list/classes-list.component.css']
})
export class ComboTypeComponent implements OnInit {

    subtypes: Subtype[];
    type: string;
    constructor() { }

    ngOnInit(): void {
        this.type = 'Combo';
    }

}
