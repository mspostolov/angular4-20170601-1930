import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any, args?: any): string {

    const now = (new Date()).valueOf();
    const thenDate = (new Date(value))
    const then = thenDate.valueOf();
    const time = thenDate.toLocaleTimeString();
    const daysAgo = Math.floor((now - then) / 1000 / 86400);

    if (daysAgo < 1) {
      return 'сегодня в ' + time;
    } else if (daysAgo < 2) {
      return 'вчера в ' + time;
    } else if (daysAgo < 5) {
      return String(daysAgo) + ' дня назад';
    } else if (daysAgo < 7) {
      return String(daysAgo) + ' дней назад';
    } else if (daysAgo < 14) {
      return 'на прошлой неделе';
    } else {
      return 'больше недели назад';
    }
  }
}
