import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { map, tap } from 'rxjs/operators';
import { MembershipsService } from './memberships.service';

@Injectable()
export class MembershipsResolver implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getMemberships().pipe(
            map(response => this.membershipsService.memberships$.next(response.result))
        );
    }
    // TODO Check how to call resolver at the start and store classes in the service without calling api anytime
    constructor(private readonly membershipsService: MembershipsService, private readonly dataService: DataService) { }
}