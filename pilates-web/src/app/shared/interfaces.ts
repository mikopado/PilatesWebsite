export interface IClass {
    id: string,
    type: ClassType,
    level: string,
    teacher: ITeacher,
    timeSlot: Date,
    room: string
}

export enum ClassType{
    Yoga,
    Pilates,
    Combo
}

export enum ClassLevel{
    Beginner,
    Intermediate,
    Advanced
}

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string
}

export interface IMember {
    user: IUser,
    membership: IMembership
}

export interface ITeacher {
    id: string,
    firstName: string,
    lastName: string
}

export interface IMembership {
    id: string,
    classType: string,
    membershipType: string
}

export interface IApiResponse<T>{
    result: T,
    statusCode: number
}
