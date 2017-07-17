import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogger]',
  exportAs: 'logger'
})
export class LoggerDirective {

  constructor() { }

  log(...arg) {
    console.log(arg);
  }

}
