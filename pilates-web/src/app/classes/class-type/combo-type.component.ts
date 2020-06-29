import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/models/card-type';
import { ClassType } from './models/class-type';

@Component({
    selector: 'app-combo-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../../app.component.css']
})
export class ComboTypeComponent implements OnInit {

    subtypes: Card[];
    type: ClassType;
    constructor() { }

    ngOnInit(): void {
        this.type = {title: 'Combo', description:'sdvsmdklvmskmdkmkmd', imageUrl:'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png'};
        this.subtypes = [{title:'Beginner', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:''}, {title:'Intermediate', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:''}, {title:'Advanced', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:''}];

    }

}
