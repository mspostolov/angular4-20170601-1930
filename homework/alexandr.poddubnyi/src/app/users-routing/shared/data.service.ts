import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  // private dataSubject$$ = <Subject<any[]>>new Subject();

  users = [
    { name: 'user-a', age: 30 },
    { name: 'user-b', age: 35 },
    { name: 'user-c', age: 40 }
  ];

  emails = [
    { name: 'mail-a', address: '30-22-55-66' },
    { name: 'mail-b', address: '35-22-55-66' },
    { name: 'mail-c', address: '40-22-55-66' }
  ];

  isLoggedIn = false;

  redirectUrl: string;

  constructor() { }

  getUsers(index: string = '') {
    const data = index ? this.users[index] : this.users;
    // this.dataSubject$$.next(data);
    // return this.dataSubject$$;
    return data;
  }

  getEmails(index: string = '') {
    const data = index ? this.emails[index] : this.emails;
    // this.dataSubject$$.next(data);
    // return this.dataSubject$$;
    return data;
  }

  toggleLoginState(): boolean {
    this.isLoggedIn = !this.isLoggedIn;

    // if (this.logged) {
    //   alert('You are logged');
    // } else {
    //   alert('You are not authorized');
    // }
    console.log(this.isLoggedIn ? 'is Logged In' : 'is not Logged In');

    return this.isLoggedIn;
  }
}
