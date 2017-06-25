import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dg-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  public routeLinks: any[];

  constructor(
    private route: ActivatedRoute
  ) {
    this.routeLinks = [
      { label: 'Inbox', link: '' },
      { label: 'Contacts', link: 'contacts' },
      { label: 'Wiki', link: 'wiki' },
      { label: 'Settings', link: 'settings' }
    ];
  }

  ngOnInit() {}
}
