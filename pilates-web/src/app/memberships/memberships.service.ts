import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { BehaviorSubject } from 'rxjs';
import { IMembership, ClassType } from '../shared/interfaces';
import { map, tap } from 'rxjs/operators';
import { MembershipType } from './models/membership-type';
import { MembershipExtraDetails } from './models/membership-details';
import { Card } from '../core/models/card';


@Injectable({
    providedIn: 'root'
})
export class MembershipsService {

    public memberships$ = new BehaviorSubject<IMembership[]>(null);
    public membershipCards$ = new BehaviorSubject<Card[]>(null);

    constructor() {}

    getMembershipCards(){
        this.memberships$.pipe(
            tap(m => console.log(m)),
            map(memberships =>  
                
                    memberships.map(m => {
                        const membDetails = MembershipExtraDetails.find(
                            md => md.name.charAt(0).toUpperCase() + md.name.slice(1) === ClassType[m.classType]
                        );
                        return ({
                            title: ClassType[m.classType],
                            imageUrl: membDetails.imageLink,
                            description: MembershipType[m.type] + membDetails.description
                        } as Card)
                    })  
                )
        ).subscribe(res => this.membershipCards$.next(res));
    }
}