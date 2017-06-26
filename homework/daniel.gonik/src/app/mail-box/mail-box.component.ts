import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'dg-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public routeLinks: any[];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.routeLinks = [
      { label: 'Inbox', link: '/app/inbox' },
      { label: 'Contacts', link: '/app/contacts' },
      { label: 'Wiki', link: '/app/wiki' },
      { label: 'Settings', link: '/app/settings' }
    ];
  }

  ngOnInit() {
  }

  get isAuthorized() {
    return this.authService.isAuthorized;
  }
}
