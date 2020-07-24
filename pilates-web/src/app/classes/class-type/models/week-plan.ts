export interface IWeekPlan {
    day: string
    lessons: IClassTimetable[]
  }

export interface IClassTimetable{
    day: string,
    timeslot: string,
    room: string,
    teacher: string,
    classType: string
}

export enum DayOfWeek {
    Sunday, 
    Monday, 
    Tuesday, 
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday
}