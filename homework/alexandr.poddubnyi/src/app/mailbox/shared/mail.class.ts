export class Mail {
  constructor (
    public firstName: string = 'Unknown',
    public lastName: string = '',
    public senderEmail: string = 'unknown@gmail.com',
    public text: string,
    public date: string = new Date().toString(),
  ) {}
}