import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})
export class CardDataComponent implements OnInit {

  @Input() user;
  public sex: string;

  constructor() { }

  ngOnInit() {
    this.sex = this.user.sex ? 'Мужской' : 'Женский';
  }

}
