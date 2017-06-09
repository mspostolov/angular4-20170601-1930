import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {

  private couter: number;

  @HostListener('click', ['$event']) log(event) {
    this.couter++;
    console.log(this.couter);
    this.mycolor = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  @HostBinding('style.color') mycolor: string;

  constructor() {
    this.couter = 0;
  }

  // public getCount() {
  //   return this.couter;
  // }

}
