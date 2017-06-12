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
    }

    if (daysAgo < 2) {
      return 'вчера в ' + time;
    }

    if (daysAgo < 5) {
      return String(daysAgo) + ' дня назад';
    }

    if (daysAgo < 7) {
      return String(daysAgo) + ' дней назад';
    }

    if (daysAgo < 14) {
      return 'на прошлой неделе';
    }

    return 'больше недели назад';
  }
}
