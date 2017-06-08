export enum Sex {
    Undefined = 1,
    Male = 2,
    Female = 3
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    sex: Sex;
    email: string;
}