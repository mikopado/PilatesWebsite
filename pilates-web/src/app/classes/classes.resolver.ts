import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ClassesService } from './classes-service';
import { DataService } from '../shared/services/data.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ClassResolver implements Resolve<any>{
    resolve() {
        return this.dataService.getClasses().pipe(
            map(response => this.classService.classes$.next(response.result))
        );
    }
    // TODO Check how to call resolver at the start and store classes in the service without calling api anytime
    constructor(private readonly classService: ClassesService, private readonly dataService: DataService) { }
}