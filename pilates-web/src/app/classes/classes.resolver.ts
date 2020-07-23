import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClassesService } from './classes-service';
import { DataService } from '../shared/services/data.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ClassResolver implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getClasses().pipe(
            tap(c => console.log(c)),
            map(response => this.classService.classes$.next(response.result))
        );
    }
    // TODO Check how to call resolver at the start and store classes in the service without calling api anytime
    constructor(private readonly classService: ClassesService, private readonly dataService: DataService) { }
}