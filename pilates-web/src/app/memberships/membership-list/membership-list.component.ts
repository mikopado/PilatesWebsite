import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { MembershipsService } from '../memberships.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css', '../../app.component.css']
})
export class MembershipListComponent implements OnInit {

  constructor(public readonly membershipService: MembershipsService) { }

  ngOnInit(): void {
    this.membershipService.getMembershipCards();    
  }

}
