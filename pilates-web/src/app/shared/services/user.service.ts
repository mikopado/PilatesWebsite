import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMember, IMembership, IClass } from '../interfaces';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userMember$ = new BehaviorSubject<IMember>(null);
    public userMembership$ = new BehaviorSubject<IMembership>(null);
    public userClasses$ = new BehaviorSubject<IClass[]>(null);

    constructor() { 
    }

   
}