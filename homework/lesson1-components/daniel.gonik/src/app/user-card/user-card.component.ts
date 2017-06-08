import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'brr-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  @ViewChild('userCard') userCard: ElementRef;
  public isOpen: boolean = false;
  public showSpinner: boolean = false;

  constructor(private _renderer: Renderer2) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.userCard.nativeElement);
  }

  get active() {
    return this.isOpen
      ? 'mc-active'
      : '';
  }

  toggleInfo() {
    this.isOpen = !this.isOpen;
    this.showSpinner = true;

    setTimeout(() => this.showSpinner = false, 800);
  }

}
