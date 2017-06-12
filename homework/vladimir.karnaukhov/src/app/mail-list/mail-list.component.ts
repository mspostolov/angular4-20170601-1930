import { Component, OnInit } from '@angular/core';
import { Email } from '../data/mail';
import { EmailsService } from '../services/emails.service';

@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  emails: Email[];
  constructor(private emailService: EmailsService) { }

  ngOnInit() {
    this.emailService
      .getEmails()
      .then(emails => this.emails = emails);
  }
  
}
