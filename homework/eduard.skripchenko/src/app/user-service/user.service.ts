import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from 'app/models/user';

@Injectable()
export class UserService {
    getUserList(): Observable<User[]> {
        const url = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
        return this.http.get(url).map(response => response.json() as User[]) ;
    }

    constructor(private http: Http) {}
}
