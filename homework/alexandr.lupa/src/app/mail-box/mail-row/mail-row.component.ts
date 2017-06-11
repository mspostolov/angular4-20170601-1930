import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[mail-row]',
  templateUrl: './mail-row.component.html',
  styleUrls: ['./mail-row.component.css']
})
export class MailRowComponent implements OnInit {

  @Input() mail: IMail;
  @Input() index: number;

  @Output() onremove = new EventEmitter<IMail>();

  createdAt: number = Date.now();

  constructor() { }

  ngOnInit() {}

  remove(): void {
    console.log(`time life of component ${(Date.now() - this.createdAt) / 1000} seconds`);
    this.onremove.emit(this.mail);
  }

}
