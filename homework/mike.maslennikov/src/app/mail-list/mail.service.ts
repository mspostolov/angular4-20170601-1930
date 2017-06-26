import { Injectable } from '@angular/core';
import { Mail } from './mail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MailService {

  constructor() { }


getMails() {
   
    return Observable.of(this.initialMails);
 }

getMail(id:Number)
{
 
  return this.initialMails.filter(item => item.id == id)[0];

}

  initialMails: Mail[] = [
  {
    id: 1,
    title: 'Шеф, усе пропало!',
    receivedDate: new Date("2017-06-12 14:00:00"),
  body: ''
  },
  {
    id: 2,
    title: 'У вас ус отклеился',
    receivedDate: new Date("2017-06-11 17:00:00"),
  body: ''
   
  },
  {
    id: 3,
    title: 'Совещание по регламенту',
    receivedDate: new Date("2017-06-10 14:00:00"),
  body: ''
   
  },
];

}
