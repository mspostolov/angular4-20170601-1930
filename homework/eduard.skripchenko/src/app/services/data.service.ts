import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { Email } from 'app/models/email';

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
            new User(3, 'James Moriarty', 'Male', new Date('11-11-1871'), '14 Alley Of Fear', 'js.moriarty@gmail.co.uk', false),
            new User(4, 'Mrs. Hudson', 'Female', new Date('04-03-1834'), '221B Baker Street', 'mrs.hudson@gmail.co.uk')
        ];
    }

    getUser(id: number): User {
        return this.getUsers().find(user => user.id === id);
    }

    getEmails(): Array<Email> {
        return [
            new Email(1, 'The Sign Of The Four', new Date(), this.getUser(1)),
            new Email(2, 'The Hound Of The Baskervilles', this.getDateMinusMinutes(30), this.getUser(2)),
            new Email(3, 'The Adventure of the Final Problem', this.getDateMinusMinutes(120), this.getUser(3))
        ];
    }

    getEmail(id: number): Email {
        return this.getEmails().find(email => email.id === id);
    }

    constructor() { }
}
