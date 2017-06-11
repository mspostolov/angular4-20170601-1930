import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogClick]'
})
export class LogClickDirective {
<<<<<<< HEAD
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

=======

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

>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
}
