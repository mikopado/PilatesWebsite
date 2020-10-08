import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() diameter: number = 100;
  @Input() show: boolean = false;
  @Input() color: string = "primary";
  constructor() { }

  ngOnInit(): void {
    
  }

}
