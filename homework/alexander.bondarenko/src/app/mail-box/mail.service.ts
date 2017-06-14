import { Injectable } from '@angular/core';
import {Mail} from "./mail.model";

import * as faker from 'faker';
import {MAILS} from "./mails.mock";

@Injectable()
export class MailService {
  private _mails: Mail[] = [];
  private _receivingTimer;

  constructor() {
    this._mails = MAILS;
  }

  getMails() {
    return this._mails;
  }

  createMail(mail:Mail) {
    this._mails.push(mail);
  }

  deleteMail(mail: Mail) {
    const i = this._mails.indexOf(mail);
    if (i > 0) {
      this._mails.splice(i, 1);
    }
  }

  receive(count) {
    if (count <= 0) return;

    while (count--) {
      this.createMail({
        from: faker.internet.email(),
        to: faker.internet.exampleEmail(),
        subject: faker.hacker.phrase(),
        receivedAt: Date.now(),
        content: faker.lorem.sentences()
      });
    }
  }

  startReceiving(interval: number) {
    this.stopReceiving();

    this._receivingTimer = setInterval(function () {
      this.receive(Date.now() % 2 + 1);
    }, interval && interval >= 0 ? interval : 5000);
  }

  stopReceiving() {
    if (this._receivingTimer) {
      clearInterval(this._receivingTimer);
      this._receivingTimer = null;
    }
  }

}
