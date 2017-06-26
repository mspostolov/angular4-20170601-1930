import { Component, OnInit } from '@angular/core';

import { DataService } from 'app/services/data.service';
import { User } from 'app/models/user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [ DataService ]
})
export class UsersComponent implements OnInit {
    public users: Array<User>;

    constructor(private dataService: DataService) {
        this.users = this.dataService.getUsers();
    }

    ngOnInit() {
    }

}
