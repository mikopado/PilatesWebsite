import { Injectable } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { BehaviorSubject, pipe, Observable, Subject } from 'rxjs';
import { Card } from '../core/models/card-type';
import { map, filter, find, take, tap } from 'rxjs/operators';
import { ClassType, ClassLevel, IClass } from '../shared/interfaces';
import { Router } from '@angular/router';
import { ClassExtraDetails } from './class-type/models/class-details';

@Injectable({
    providedIn: 'root'
})
export class ClassesService {

    public classesList$ = new BehaviorSubject<Card[]>(null);
    public classesSubtype$ = new BehaviorSubject<Card[]>(null);
    public type$ = new BehaviorSubject<Card>(null);
    public classes$ = new BehaviorSubject<IClass[]>(null);

    constructor() {}

    getClassList() {
        this.classes$
            .pipe(                
                map(                    
                    classes => 
                        classes.filter((value, index, self) => self.map(mapObj => mapObj['type']).indexOf(value['type']) === index)
                        .map(cls =>                         
                        ({
                        title: ClassType[cls.type],
                        imageUrl: ClassExtraDetails.find(c => c.name === ClassType[cls.type].toLowerCase()).imageLink
                    } as Card))
                    )
                ).subscribe(res => this.classesList$.next(res));
    }

    private getClassSubTypes(clas: string) {
        this.classes$
            .pipe(
                map(                    
                    classes => classes.filter(r => ClassType[r.type] === clas).map(cls => 
                        ({
                        title: ClassLevel[cls.level],
                        imageUrl: ClassExtraDetails.find(c => c.name === clas.toLowerCase()).imageLink
                    } as Card))
                )).subscribe(res => this.classesSubtype$.next(res));
    }

    private getClassType(cls: string) {
        this.classes$.pipe(
            map(clas => {   
                const singleClass = clas.find(single => ClassType[single.type] === cls);
                const cardDetail = ClassExtraDetails.find(c => c.name === cls.toLowerCase());
                return {
                    title: ClassType[singleClass.type],
                    description: cardDetail.description,
                    imageUrl: cardDetail.imageLink
                }
            })).subscribe(resp => this.type$.next(resp));
    }

    getClassTypeDetails(clsName: string){
        this.getClassType(clsName);
        this.getClassSubTypes(clsName);
    }
}