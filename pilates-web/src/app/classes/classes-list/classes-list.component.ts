import { Component, OnInit } from '@angular/core';
import { Card } from '../../core/models/card-type';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css', '../../app.component.css']
})
export class ClassesListComponent implements OnInit {

  cards: Card[];
  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {title: 'Yoga', imageUrl: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/09/GRT-female-yoga-by-water-1296x728-header-1296x728.jpg?w=1155&h=1528', link:'yoga'},
      {title: 'Pilates', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:'pilates'},
      {title: 'Combo', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:'combo'}  
    ]
  }

}
