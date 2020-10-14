import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MembershipsService } from '../memberships.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css', '../../app.component.css']
})
export class MembershipListComponent implements OnInit {

  constructor(public readonly membershipService: MembershipsService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.membershipService.getMembershipCards()
    .subscribe(res => { this.membershipService.membershipCards$.next(res);});;    
  }

}
