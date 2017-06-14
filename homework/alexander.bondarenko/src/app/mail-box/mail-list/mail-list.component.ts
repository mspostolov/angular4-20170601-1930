import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MailService} from '../mail.service';
import {Mail} from "../mail.model";

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  mails: Mail[] = [];

  constructor(private ref: ChangeDetectorRef, private _mailService: MailService) {
    this.getMails();
  }

  getMails() {
    this.mails = this._mailService.getMails();
  }

  detachChanges() {
    this.ref.detach();

    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }

  processDeleted(mail) {
    this._mailService.deleteMail(mail);
    this.getMails();
  }

  ngOnInit() {
    // this.detachChanges();
  }

}
