import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ClassesService } from './classes-service';
import { DataService } from '../shared/services/data.service';
import { finalize, map } from 'rxjs/operators';
import { SpinnerService } from '../core/spinner.service';

@Injectable()
export class ClassResolver implements Resolve<any>{    
    resolve() {  
        this.spinnerService.startLoading();      
        //TODO It's calling everytime the GetClassCalendar for each classes page
        return this.dataService.getClassesCalendar().pipe(
            finalize(() => this.spinnerService.stopLoading()),
            map(response => this.classService.classes$.next(response.result))
        );
    }
    
    // TODO Check how to call resolver at the start and store classes in the service without calling api anytime
    constructor(
        private readonly classService: ClassesService, 
        private readonly dataService: DataService, 
        private readonly spinnerService:SpinnerService
        ) { }
}