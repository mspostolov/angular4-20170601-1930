import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck'

import { ContactsService } from '../../_services/contacts.service';

@Component({
  selector: 'dg-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  public contact = {};

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.route.params.pluck('contactId').subscribe(contactId => {
      const id = +contactId;
      this.contactsService.getUserById(id)
        .subscribe(contact => this.contact = contact);
    });
  }

}
