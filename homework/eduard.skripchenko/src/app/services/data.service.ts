import { Injectable } from '@angular/core';
import { User } from 'app/models/user';

@Injectable()
export class DataService {
    private getDateMinusMinutes(minutes: number): Date {
        const date = new Date();
        date.setMinutes(date.getMinutes() - minutes);

        return date;
    }

    getUsers(): Array<User> {
        return [
            new User(1, 'Sherlock Holmes', 'Male', new Date('11-12-1845'), '221B Baker Street', 'sh.holmes@gmail.co.uk' ),
            new User(2, 'John Watson', 'Male', new Date('05-03-1852'), '221B Baker Street', 'jh.watson@gmail.co.uk'),
            new User(3, 'James Moriarty', 'Male', new Date('11-11-1871'), '14 Alley Of Fear', 'js.moriarty@gmail.co.uk'),
            new User(4, 'Mrs. Hudson', 'Female', new Date('04-03-1834'), '221B Baker Street', 'mrs.hudson@gmail.co.uk')
        ];
    }

    getUser(id: number): User {
        return this.getUsers().find(user => user.id === id);
    }

    constructor() { }
}
