import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let diffTime = Date.now() - value.getTime();

    if ( diffTime < 1000 ) {
      return 'только что';
    }

    let sec = diffTime / 1000;
    if ( sec < 60 ) {
      return Math.floor(sec) + ' секунд назад'
    }

    let min = sec / 60;
    if ( min < 60 ) {
      return Math.floor(min) + ' минут назад'
    }

    let hour = min / 60;
    if ( hour < 24 ) {
      return Math.floor(hour) + ' часов назад'
    }

    let day = hour / 24;
    if ( day < 30 ) {
      return Math.floor(day) + ' дней назад'
    }

    let month = day / 30;
    if ( month < 12 ) {
      return Math.floor(month) + ' месяца назад'
    }

    let year = month / 12;
    return Math.floor(year) + ' лет назад';
  }

}
