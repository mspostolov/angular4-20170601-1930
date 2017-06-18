import { Injectable } from '@angular/core';
import { User } from '../../data/user';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {
  private usersUrl = 'api/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const userUrl = `${this.usersUrl}/${id}`;

    return this.http
      .get(userUrl)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const deleteUrl = `${this.usersUrl}/${id}`;

    return this.http
      .delete(deleteUrl, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(
    firstName: string,
    lastName: string,
    country?: string,
    photo?: string) {

    var newUser = new User();
    newUser.firstName = firstName;
    newUser.surname = lastName;

    if (country !== null) {
      newUser.country = country;
    }

    if (photo != null) {
      newUser.photo = photo;
    }

    return this.http
      .post(this.usersUrl, JSON.stringify(newUser), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  update(user: User): Promise<User> {
    const updateUrl = `${this.usersUrl}/${user.id}`;

    return this.http
      .put(updateUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occured', error);

    return Promise.reject(error.message || error);
  }

}
