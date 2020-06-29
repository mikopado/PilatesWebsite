import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/models/card-type';
import { ClassType } from './models/class-type';

@Component({
    selector: 'app-pilates-type',
    templateUrl: './class-type.component.html',
    styleUrls: ['./class-type.component.css', '../../app.component.css']
})
export class PilatesTypeComponent implements OnInit {

    subtypes: Card[];
    type: ClassType;
    constructor() { }

    ngOnInit(): void {
        this.type = {title: 'Pilates', description: 'adnfajnvjanjvndjnv', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg'};
        this.subtypes = [{title:'Beginner', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:''}, {title:'Intermediate', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:''}, {title:'Advanced', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:''}];

    }

}
