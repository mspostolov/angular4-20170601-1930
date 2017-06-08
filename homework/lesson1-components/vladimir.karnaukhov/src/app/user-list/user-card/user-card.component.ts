import { Component, Input, OnInit } from '@angular/core';
import { User, Sex } from '../user';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

  parseSexValue(value: number): string {
    switch (value) {
      case Sex.Male:
        return "Мужской";
      case Sex.Female:
        return "Женский";
      case Sex.Undefined:
        return "";
      default: return "";
    }
  }

}
