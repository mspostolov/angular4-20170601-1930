import { Component, OnInit } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  constructor(private _mailService: MailService) { }

  ngOnInit() {
  }

  startReceiving() {
    this._mailService.startReceiving();
  }

  stopReceiving() {
    this._mailService.stopReceiving();
  }

  receiveOnce() {
    this._mailService.receive(5);
  }

}

/*
* 1. mail-box component:
*   mail-list
*   mail
*
* */
