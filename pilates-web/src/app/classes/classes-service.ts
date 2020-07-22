import { Injectable } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { BehaviorSubject, pipe, Observable } from 'rxjs';
import { Card, CardDetails } from '../core/models/card-type';
import { map, filter, find, take } from 'rxjs/operators';
import { ClassType, ClassLevel } from '../shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class ClassesService {

    public classesList$ = new BehaviorSubject<Card[]>(null);
    public classesSubtype$ = new BehaviorSubject<Card[]>(null);
    public type$ = new BehaviorSubject<Card>(null);

    constructor(private dataService: DataService) {
    }

    getClassList() {
        this.dataService.getClasses()
            .pipe(
                map(                    
                    classes => classes.result.map(cls => 
                        ({
                        title: ClassType[cls.type],
                        imageUrl: CardDetails.find(c => c.name === ClassType[cls.type].toLowerCase()).link,
                        link: ClassType[cls.type].toLowerCase()
                    } as Card))
                )).subscribe(res => this.classesList$.next(res));
    }

    getClassSubTypes(clas: string) {
        this.dataService.getClasses()
            .pipe(
                map(                    
                    classes => classes.result.filter(r => ClassType[r.type] === clas).map(cls => 
                        ({
                        title: ClassLevel[cls.level],
                        imageUrl: CardDetails.find(c => c.name === clas.toLowerCase()).link,
                        link: ''
                    } as Card))
                )).subscribe(res => this.classesSubtype$.next(res));
    }

    getClassType(cls: string) {
        this.classesList$.pipe(
            map(clas => {
                const singleClass = clas.find(single => single.title === cls);
                return {
                    title: singleClass.title,
                    description: CardDetails.find(c => c.name === cls.toLowerCase()).description,
                    link: '',
                    imageUrl: singleClass.imageUrl
                }
            })).subscribe(resp => this.type$.next(resp));
    }
}