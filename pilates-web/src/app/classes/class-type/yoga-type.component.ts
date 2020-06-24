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
        this.type = {title: 'Yoga', description:'sdkkamdvkamdkvm', imageUrl:'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/09/GRT-female-yoga-by-water-1296x728-header-1296x728.jpg?w=1155&h=1528'};
        this.subtypes = [{title:'Beginner', imageUrl: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/09/GRT-female-yoga-by-water-1296x728-header-1296x728.jpg?w=1155&h=1528', link:''}, {title:'Intermediate', imageUrl: '"../../../assets/logo.png"', link:''}, {title:'Advanced', imageUrl: '"../../../assets/logo.png"', link:''}];
    }

}
