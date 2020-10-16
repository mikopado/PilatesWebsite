import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IMember, IMembership, IClass, IRegisterMember, IUserMembership, IClassBooking } from '../interfaces';
import { AuthenticationService } from './authenticationService';
import { DataService } from './data.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userMember$ = new BehaviorSubject<IMember>(null);
    public userMembership$ = new BehaviorSubject<IUserMembership>(null);
    public userClasses$ = new BehaviorSubject<IClassBooking[]>(null);

    constructor(private dataService: DataService, private authService: AuthenticationService) { 
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

    bookClass(classId: string, date: Date){ 
        return this.dataService.bookClass(classId, this.authService.currentUser$.getValue().id, date)
            .pipe(
                map(response =>
                    this.dataService.getBookedClass(response.result)
                        .pipe(
                            map(r => {
                                this.userClasses$.next([...this.userClasses$.getValue(), r.result])
                            })
                        ).subscribe()
                )
            )
    }

    cancelClassBooking(classBookingId: string){
        return this.dataService.cancelClassBooking(classBookingId)
        .pipe(
            map(r => 
                { 
                    this.userClasses$.next(this.userClasses$.getValue().filter(x => x.id !== classBookingId));
                }
            )
        )
    }
}