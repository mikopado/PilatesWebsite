import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { BehaviorSubject } from 'rxjs';
import { IMembership, ClassType } from '../shared/interfaces';
import { map, tap } from 'rxjs/operators';
import { MembershipType } from './models/membership-type';
import { MembershipExtraDetails } from './models/membership-details';
import { Card, MembershipCard } from '../core/models/card';


@Injectable({
    providedIn: 'root'
})
export class MembershipsService {

    public memberships$ = new BehaviorSubject<IMembership[]>(null);
    public membershipCards$ = new BehaviorSubject<MembershipCard[]>(null);

    constructor() {}

    getMembershipCards(){
        let details = [];
        return this.memberships$.pipe(
            map(memberships =>                  
                    memberships.sort((a,b) => a.classType - b.classType)
                    .map(m => {
                        const membDetails = MembershipExtraDetails.find(
                            md => md.name.charAt(0).toUpperCase() + md.name.slice(1) === ClassType[m.classType]
                        );
                        details.push(membDetails);
                        return ({
                            title: ClassType[m.classType],
                            imageUrl: details.filter(m => m.name === membDetails.name).length === 1 ? membDetails.imageLink[0] : membDetails.imageLink[1],
                            description: MembershipType[m.type] + membDetails.description,
                            id: m.id
                        } as MembershipCard)
                    })  
                )
        )
    }
}