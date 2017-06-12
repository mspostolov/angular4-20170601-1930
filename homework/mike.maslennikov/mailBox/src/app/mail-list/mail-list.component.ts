import { Component, OnInit } from '@angular/core';

import { Mail, MailEvent } from './shared/mail';
import { MailService } from './shared/mail.service';
import { MailHelper } from './shared/mail.helper';


@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  providers: [MailService, MailHelper]
})
export class MailListComponent implements OnInit {

  mails: Mail[];

  deletedLife:number = 0;

  constructor(private mailService : MailService, private mailHelper : MailHelper) {} 

  ngOnInit() {
    this.mails = this.mailService.getMails();
    this.repeatRefreshMail(true);
    
  }



repeatRefreshMail(firstRun: boolean)
{

if(!firstRun)
  this.refreshMail();

setTimeout(()=>this.repeatRefreshMail(false), this.mailHelper.randomInt(3,5)*1000);

}


refreshMail()
{
  this.mailService.getNewMails().forEach(mail => {
    this.mails.unshift(mail);
  });

}

  mailDeleted(mailEvent)
  {
 
  this.deletedLife = this.mailHelper.calculateLifetime(mailEvent.componentInitDate, new Date()) ;
  this.deleteMail(mailEvent.mail);

  }

 

  deleteMail (mail: Mail)
  {
  this.mails = this.mails.filter(item => item.id != mail.id);

  }



}
