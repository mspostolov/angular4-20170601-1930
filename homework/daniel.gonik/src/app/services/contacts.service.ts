import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() {}

  getUsers() {
    return [
      { name: 'Bob' },
      { name: 'Jane' }
    ];
  }

}
