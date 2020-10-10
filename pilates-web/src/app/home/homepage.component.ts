import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {  
  constructor() {  
   
  }  
  ngOnInit() {  
  } 
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = false;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  images = [
    {img: './assets/combo-adv.jpeg', text: 'Combo'},
    {img: './assets/pilates-adv.jpg', text: 'Combo'},
    {img: './assets/extra.jpg', text: 'Combo'},
    {img: './assets/pilates-extra.jpg', text: 'Combo'}
  ];
 
  startCarousel() {
    this.carousel.cycle();
  } 
}
