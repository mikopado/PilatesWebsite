import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card-type';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css', '../../app.component.css']
})
export class MembershipListComponent implements OnInit {

  cards: Card[];

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {title: '1 year Yoga', imageUrl: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/09/GRT-female-yoga-by-water-1296x728-header-1296x728.jpg?w=1155&h=1528', link:'yoga', description: ''},
      {title: '1 year Yoga/Pilates', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:'combo', description: ''},
      {title: '1 year Pilates', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:'pilates', description: ''},
      {title: '1 month Yoga', imageUrl: 'https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/09/GRT-female-yoga-by-water-1296x728-header-1296x728.jpg?w=1155&h=1528', link:'yoga', description: ''},
      {title: '1 month Yoga/Pilates', imageUrl: 'https://naturalkaram.com/wp-content/uploads/2019/09/pilates.jpg', link:'combo', description: ''},
      {title: '1 month Pilates', imageUrl: 'http://images8.design-editor.com/93/9390973/3958/67B0E24D-85F0-B2D3-094A-AB0EA0CACCEF.png', link:'pilates', description: ''}  
  
    ]
  }

}
