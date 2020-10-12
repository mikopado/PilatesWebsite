import { Component, OnInit } from '@angular/core';
import { MembershipsService } from '../memberships.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css', '../../app.component.css']
})
export class MembershipListComponent implements OnInit {

  loading: boolean = false;
  constructor(public readonly membershipService: MembershipsService) { }

  ngOnInit(): void {
    this.membershipService.getMembershipCards()
    .subscribe(res => { this.membershipService.membershipCards$.next(res); this.loading = false;});;    
  }

}
