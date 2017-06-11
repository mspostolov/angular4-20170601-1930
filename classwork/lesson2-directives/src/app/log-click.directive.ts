import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {
  private counter: number = 0;

  @HostListener('click', ['$event']) log(e) {
    this.counter++;
    this.mycolor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(this.counter, this.mycolor);
  }

  // @HostBinding('value') myvalue: string;
  @HostBinding('style.color') mycolor: string;

  constructor() {
    // this.myvalue = 'wad';

  }

}
