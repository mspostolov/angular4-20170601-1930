export class Mail 
{
   id: number;
   title: string;
  
   receivedDate: Date;

}


export class MailEvent 
{
  
  constructor(mail:Mail, componentInitDate: Date) {
this.mail = mail;
this.componentInitDate = componentInitDate;

  }
  
   mail: Mail;
   componentInitDate: Date;

}