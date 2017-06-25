import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

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

  constructor() { }

  getUsers(index: string = '') {
    return index ? this.users[index] : this.users;
  }

  getEmails(index: string = '') {
    return index ? this.emails[index] : this.emails;
  }
}
