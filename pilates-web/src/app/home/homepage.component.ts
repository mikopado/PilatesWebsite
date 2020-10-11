import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {  
  constructor() {  
   
  }  
  ngOnInit() {  
  } 
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = false;

  
  images = [
    {img: './assets/yoga-p2.jpg', text: 'Peace comes from within. Do not seek it without.', author: 'Buddha'},
    {img: './assets/combo.jpeg', text: 'The secret of getting ahead is getting started.', author: 'Mark Twain'},
    {img: './assets/yoga-t.jpg', text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius'},
    {img: './assets/yoga-p.jpg', text: 'Inhale the future, exhale the past.', author:'Leticia Rae'}
  ];
 
}
