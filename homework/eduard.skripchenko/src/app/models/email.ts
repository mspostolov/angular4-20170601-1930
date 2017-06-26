import { User } from 'app/models/user';

export class Email {
    constructor(public id: number, public title: string, public received: Date, public user: User) {}
}
