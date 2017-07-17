import { Injectable } from '@angular/core';
import { Mail } from './mail';

const mails: Mail[] = [{
  id: 0,
  from: '0@mail.com',
  to: '1@mail.com',
  title: '0',
  body: 'body'
}, {
  id: 1,
  from: '1@mail.com',
  to: '0@mail.com',
  title: '1',
  body: 'body'
}, {
  id: 2,
  from: '2@mail.com',
  to: '0@mail.com',
  title: '2',
  body: 'body'
}];

@Injectable()
export class MailService {

  constructor() { }

  all() {
    return mails;
  }

  getMail(id: number): Promise<Mail> {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const mail = mails.find(function(mail) {
          return mail.id == id;
        });
        resolve(mail);
      }, 100)
    });
  }
}
