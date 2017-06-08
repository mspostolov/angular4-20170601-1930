import { Component } from '@angular/core';
import { User } from 'app/models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    users: Array<User> = [
        new User(1, 'Sherlock Holmes', '11-12-1845', 'Male', '221B Baker Street', 'sh.holmes@gmail.co.uk'),
        new User(2, 'John Watson', '05-03-1852', 'Male', '221B Baker Street', 'jh.watson@gmail.co.uk'),
        new User(3, 'James Moriarty', '11-11-1871', 'Male', '14 Alley Of Fear', 'js.moriarty@gmail.co.uk'),
        new User(4, 'Mrs. Hudson', '04-03-1834', 'Female', '221B Baker Street', 'mrs.hudson@gmail.co.uk')
    ];
}
