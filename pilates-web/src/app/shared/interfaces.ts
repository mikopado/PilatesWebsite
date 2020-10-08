import { MembershipType } from '../memberships/models/membership-type';

export interface IClass {
    id: string,
    type: ClassType,
    level: ClassLevel,
    teacher: ITeacher,
    weekDay: number,
    startingTime: string,
    endingTime: string,
    room: string
}

export interface IClassBooking {
    id: string,
    type: ClassType,
    level: ClassLevel,
    teacher: ITeacher,
    date: Date,
    startingTime: string,
    endingTime: string,
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

export interface IUserMemberResponse {
    user: IUser,
    member: IMember,
    membership: IMembership,
    classes: IClassBooking[]
}

export interface IMember{
    firstName: string,
    lastName: string,
    address: string,
    dob: Date,
    city: string,
    email: string
}

export interface ITeacher {
    id: string,
    firstName: string,
    lastName: string
}

export interface IMembership {
    id: string,
    classType: ClassType,
    type: MembershipType,
    expirationTime: Date,
    price: number,
    days: number
}

export interface IUserMembership {
    classType: string,
    type: string,
    expirationTime: Date,
    price: number,
    period: string
}

export interface IUser {
    id: string,
    email: string
}

export interface IRegisterMember{
    firstName: string,
    lastName: string,
    address: string,
    dob: Date,
    city: string,
    userId: string,
    membershipId: string
}

export interface IApiResponse<T>{
    result: T,
    statusCode: number,
    message: string
}

