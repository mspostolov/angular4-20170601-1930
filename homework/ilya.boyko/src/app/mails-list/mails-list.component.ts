import { Component, OnInit } from '@angular/core';

import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.css']
})
export class MailsListComponent implements OnInit {

  mails: Mail[];

  constructor(private _Mails: MailService) {
    this.mails = this._Mails.all();
  }

  ngOnInit() {
  }

}
