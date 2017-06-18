import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dg-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input() users = [];

  constructor() { }

  ngOnInit() {
  }

}
