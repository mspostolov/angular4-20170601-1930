import { Injectable } from '@angular/core';

import { Mail } from './mail';
import { initialMails } from './mail.data';
import { MailHelper } from './mail.helper';

@Injectable()
export class MailService {
  constructor(private mailHelper:MailHelper) { }
  
  currentId:number = 10;

  getMails() {
    return initialMails;
  }


  getNewMails()
  {
    var mails = [];
    
    for (var i=1; i<=this.mailHelper.randomInt(1,2);i++)
        mails.push(this.getNewMail());
        
    return mails;

  } 

 

  getNewMail() {
    this.currentId++;

    return   {
    id: this.currentId,
    title: 'Новое письмо '+ this.currentId,
    receivedDate: new Date()
  
  };
  }
  
}