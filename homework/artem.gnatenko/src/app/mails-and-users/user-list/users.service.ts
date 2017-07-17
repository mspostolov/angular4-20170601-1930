import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IUser } from './user-list.component';

@Injectable()
export class UsersService {
  private usersUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';

  constructor(private http: Http) { }

  public getUsersList(): Observable<IUser[]> {
    return this.http.get(this.usersUrl)
                    .map((res: Response) => res.json())
                    .map((users: IUser[]): IUser[] => {
                      return users.map((user, index) => { 
                        user.id = index+1;
                        return user;
                      })
                    });
  }

}
