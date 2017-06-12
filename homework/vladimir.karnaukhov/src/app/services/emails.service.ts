import { Injectable } from '@angular/core';
import { Email } from '../data/mail';
import { DefaultEmails } from '../data/mail-mock';

@Injectable()
export class EmailsService {

  private maxMonth: number = new Date().getMonth() - 1;
  private maxDay: number = 30;
  private emails: Email[];
  constructor() {
    this.emails = DefaultEmails.slice(0);
    this.generateEmails(2);
  }

  getEmails(): Promise<Email[]> {
    return Promise.resolve(this.emails);
  }

  createEmail(): Email {
    var newId = this.emails[this.emails.length - 1].id + 1;
    return <Email>{
      id: newId,
      receivingDate: this.getRandomDate(),
      from: 'Почтальон Печкин',
      title: `Новое тестовое письмо ${newId}`,
      text: `Текст тестового письма ${newId}`
    };
  }

  deleteEmail(email: Email) {
    var index = this.emails.indexOf(email);

    // kvv: нельзя удалить дефолтные письма.
    if(index >= DefaultEmails.length) {
      this.emails.splice(index, 1);
    }
  }

  private generateEmails(count: number): void {
    for (var i = 0; i < count; i++) {
      setInterval(() => {
        this.emails.push(this.createEmail());
      }, 3000);
    }
  }

  private getRandomDate(): Date {
    return new Date(
      2017,
      Math.floor(Math.random() * (this.maxMonth - 1) + 1),
      Math.floor(Math.random() * (this.maxDay - 1) + 1));
  }
}
