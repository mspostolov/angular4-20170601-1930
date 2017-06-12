import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dg-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() emails;

  constructor() { }

  ngOnInit() {
  }

}
