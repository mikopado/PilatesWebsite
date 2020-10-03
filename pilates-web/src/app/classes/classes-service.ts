import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../core/models/card';
import { map, groupBy, filter, find, tap, distinct } from 'rxjs/operators';
import { ClassType, ClassLevel, IClass } from '../shared/interfaces';
import { ClassExtraDetails, SubTypeExtraDetails } from './class-type/models/class-details';
import { IWeekPlan, DayOfWeek, IClassTimetable } from './class-type/models/week-plan';

@Injectable()
export class ClassesService {

    public classesList$ = new BehaviorSubject<Card[]>(null);
    public classesSubtype$ = new BehaviorSubject<Card[]>(null);
    public type$ = new BehaviorSubject<Card>(null);
    public classes$ = new BehaviorSubject<IClass[]>(null);
    public weeklyTimetable$ = new BehaviorSubject<IWeekPlan[]>(null);

    constructor() { }

    getClassList() {
        this.classes$
            .pipe(
                map(
                    classes =>
                        classes.filter((value, index, self) => self.map(mapObj => mapObj['type']).indexOf(value['type']) === index)
                            .sort((a, b) => a.type - b.type)
                            .map(cls =>
                                ({
                                    title: ClassType[cls.type],
                                    imageUrl: ClassExtraDetails.find(c => c.name === ClassType[cls.type].toLowerCase()).imageLink
                                } as Card))
                )
            ).subscribe(res => this.classesList$.next(res));
    }

    getClassTypeDetails(clsName: string) {
        this.getClassType(clsName);
        this.getClassSubTypes(clsName);
    }

    getWeeklyTimetable() {
        this.classes$
            .pipe(
                map(
                    classes => classes
                        .sort((a, b) => a.weekDay - b.weekDay)
                        .map(
                            cls => ({
                                classId: cls.id,
                                classType: ClassType[cls.type],
                                room: cls.room,
                                teacher: cls.teacher.firstName.concat(' ', cls.teacher.lastName),
                                timeslot: cls.startingTime.slice(0, cls.startingTime.lastIndexOf(':')).concat(' - ', cls.endingTime.slice(0, cls.endingTime.lastIndexOf(':'))),
                                day: DayOfWeek[cls.weekDay]
                            } as IClassTimetable)
                        )
                )
            ).subscribe(timetable => this.weeklyTimetable$.next(
                timetable.map(time =>
                    (
                        {
                            day: time.day,
                            lessons: timetable.filter(tt => tt.day === time.day).sort((a, b) => parseInt(a.timeslot.slice(0, 2)) - parseInt(b.timeslot.slice(0, 2)))
                        } as IWeekPlan)
                )
                    .filter((value, index, self) => self.map(mapObj => mapObj['day']).indexOf(value['day']) === index)
            ));
    }

    bookClass(classId: string, userId: string, date: Date){

    }

    private getClassSubTypes(clas: string) {
        this.classes$
            .pipe(
                map(
                    classes => classes
                        .filter(value => ClassType[value.type] === clas)
                        .filter((value, index, self) => self.map(mapObj => mapObj['level']).indexOf(value['level']) === index)
                        .sort((a, b) => a.level - b.level)
                        .map(cls => {
                            const subTypeDetails = SubTypeExtraDetails.find(c => c.type === clas.toLowerCase() && c.name === ClassLevel[cls.level].toLowerCase());
                            return {
                                title: ClassLevel[cls.level],
                                imageUrl: subTypeDetails.imageLink,
                                description: subTypeDetails.description
                            } as Card
                        })

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