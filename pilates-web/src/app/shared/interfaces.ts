export interface IClass {
    id: string,
    type: string,
    level: string,
    teacher: ITeacher,
    timeSlot: Date,
    room: string
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
