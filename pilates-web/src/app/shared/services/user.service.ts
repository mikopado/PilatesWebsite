import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMember, IMembership, IClass, IRegisterMember, IUserMembership } from '../interfaces';
import { DataService } from './data.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userMember$ = new BehaviorSubject<IMember>(null);
    public userMembership$ = new BehaviorSubject<IUserMembership>(null);
    public userClasses$ = new BehaviorSubject<IClass[]>(null);

    constructor(private dataService: DataService) { 
    }

    registerUserMember(member: IRegisterMember, email: string, membership: IUserMembership){
        return this.dataService.registerMember(member)
        .pipe(
            map(m => {
                this.userMember$.next(
                    {
                        ...member,
                        email: email
                    } as IMember
                );
                this.userMembership$.next(membership);
            })
        )
    }
}