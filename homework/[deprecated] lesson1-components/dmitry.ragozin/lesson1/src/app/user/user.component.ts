import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dr-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() users;
  constructor() { }

  ngOnInit() {
  }

  highlightItem(item) {
    if ('yellow' == item.style.backgroundColor) {
      item.style.backgroundColor = '';
    } else {
      item.style.backgroundColor = 'yellow';
    }
  }

}
