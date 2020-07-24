import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../core/models/card';
import { map, groupBy, filter, find, tap } from 'rxjs/operators';
import { ClassType, ClassLevel, IClass } from '../shared/interfaces';
import { ClassExtraDetails } from './class-type/models/class-details';
import { IWeekPlan, DayOfWeek, IClassTimetable } from './class-type/models/week-plan';

@Injectable()
export class ClassesService {

    public classesList$ = new BehaviorSubject<Card[]>(null);
    public classesSubtype$ = new BehaviorSubject<Card[]>(null);
    public type$ = new BehaviorSubject<Card>(null);
    public classes$ = new BehaviorSubject<IClass[]>(null);
    public weeklyTimetable$ = new BehaviorSubject<IClassTimetable[]>(null);

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

    getClassTypeDetails(clsName: string){
        this.getClassType(clsName);
        this.getClassSubTypes(clsName);
    }

    getWeeklyTimetable(){
        this.classes$
        .pipe(
            map(
                classes => classes.map(
                    cls => ({
                        classType: ClassType[cls.type],
                        room: cls.room,
                        teacher: cls.teacher.firstName.concat(' ', cls.teacher.lastName),
                        timeslot: cls.startingTime.slice(0, cls.startingTime.lastIndexOf(':')).concat(' - ', cls.endingTime.slice(0, cls.endingTime.lastIndexOf(':'))),
                        day: DayOfWeek[cls.weekDay]
                    } as IClassTimetable)
                )
            )
        ).subscribe(timetable => this.weeklyTimetable$.next(this.groupBy<IClassTimetable>(timetable, 'day')));
        console.log(this.weeklyTimetable$.getValue());
    }

    private groupBy<T>(items: T[], key: string) {
        return items.reduce(
            (result, item) => ({
              ...result,
              [item[key]]: [
                ...(result[item[key]] || []),
                item,
              ],
            }), 
            [],
          );
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

    
}