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
  public isAuthorized = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.routeLinks = [
      { label: 'Inbox', link: '/inbox' },
      { label: 'Contacts', link: '/contacts' },
      { label: 'Wiki', link: '/wiki' },
      { label: 'Settings', link: '/settings' }
    ];
  }

  ngOnInit() {
    this.isAuthorized = this.authService.isAuthorized;
  }
}
