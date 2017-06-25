import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { MailBoxService } from './mail-box.service';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'dg-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public users: Array<Object> = [];
  public routeLinks: any[];

  constructor(
    private http: Http,
    private mailBoxService: MailBoxService,
    private contactsService: ContactsService,
    private route: ActivatedRoute
  ) {
    this.routeLinks = [
      { label: 'Inbox', link: 'inbox' },
      { label: 'Contacts', link: 'contacts' },
      { label: 'Wiki', link: 'wiki' },
      { label: 'Settings', link: 'settings' }
    ];
  }

  ngOnInit() {
    this.contactsService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
