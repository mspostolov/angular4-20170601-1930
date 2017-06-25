import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dg-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.pluck('contacts').subscribe(contacts => {
      this.contacts = contacts;
    })
  }

}
