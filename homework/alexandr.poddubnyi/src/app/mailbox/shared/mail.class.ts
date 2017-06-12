export class Mail {
  constructor(public firstName: string = 'Unknown',
              public lastName: string = '',
              public senderEmail: string = 'unknown@gmail.com',
              public text: string = 'Some Text',
              public date: string = new Date().toString()) {}
}
