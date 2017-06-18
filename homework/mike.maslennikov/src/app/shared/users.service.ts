import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
 import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
 
import { User } from './user';
 
@Injectable()
export class UsersService {
  private usersUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';  
 
  constructor (private http: Http) {}
 
  public getUsers() :  Promise<User[]> {
    return this.http.get(this.usersUrl)
                  .toPromise()
                  .then(response => { return response.json();});
                  
                    
  }

}
 