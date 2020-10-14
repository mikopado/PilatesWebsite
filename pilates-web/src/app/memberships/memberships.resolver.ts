import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { finalize, map } from 'rxjs/operators';
import { MembershipsService } from './memberships.service';
import { SpinnerService } from '../core/spinner.service';

@Injectable()
export class MembershipsResolver implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.spinnerService.startLoading();
        return this.dataService.getMemberships().pipe(
            finalize(() => this.spinnerService.stopLoading()),
            map(response => { 
                this.membershipsService.memberships$.next(response.result);
            } )
        );
    }
    
    // TODO Check how to call resolver at the start and store classes in the service without calling api anytime
    constructor(
        private readonly membershipsService: MembershipsService, 
        private readonly dataService: DataService,
        private spinnerService: SpinnerService) { }
}