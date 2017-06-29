import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mail: Mail;

  constructor(private _route: ActivatedRoute, private _mails: MailService) {}

  ngOnInit() {
    this._route.params
    .switchMap((params: Params) => this._mails.getMail(+params['id']))
    .subscribe(mail => this.mail = mail);
  }

}
