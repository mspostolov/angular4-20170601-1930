import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})

export class DateFormatterPipe implements PipeTransform {

  private hourDuration: number; // час в ms
  private dayDuration: number; // день в ms

  constructor() {
    this.dayDuration = 1000*60*60*24;
    this.hourDuration = 1000*60*60;
  }

  transform(value: any, args?: any): any {
    let days: number = this.getDays(value);
    return days > 0 ? days + ' day(s) ago' : this.getHours(value) + ' hour(s) ago';
  }

  // функция получения кол-ва дней
  private getDays(date: Date): number {
    return Math.floor((Date.now() - date.getTime()) / this.dayDuration);
  }

  // функция получения кол-ва часов
  private getHours(date: Date): number {
    return Math.floor((Date.now() - date.getTime()) / this.hourDuration);
  }

}
