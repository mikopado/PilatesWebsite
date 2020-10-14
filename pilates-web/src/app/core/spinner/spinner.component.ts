import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  loadingSub: Subscription;
  show: boolean;
  @Input() diameter: number = 100;
  @Input() color: string = "primary";
  constructor(private readonly spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.loadingSub = this.spinnerService.loading$.subscribe(
      status => {this.show = status;}
    )
  }

  ngOnDestroy(): void{
    this.loadingSub.unsubscribe();
  }
}
