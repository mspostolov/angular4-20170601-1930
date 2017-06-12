import { Pipe, PipeTransform } from '@angular/core';

// Epochs
const epochs: any = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
    ['second', 1]
];

/*
 * Turn Date into realtive date (e.g. 5 days ago)
 * Usage:
 *   value | relativeDate
 * Example:
 *   {{ 86400 |  relativeDate}}
 *   formats to: '1 day ago'
*/
@Pipe({name: 'relativeDate'})
export class RelativeDatePipe implements PipeTransform {

  getDuration(timeAgoInSeconds: number) {
    for (let [name, seconds] of epochs) {
      let interval = Math.floor(timeAgoInSeconds / seconds);

      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
    return {
      interval: 0,
      epoch: 'second'
    };
  };

  transform(dateStamp: number): string {
    let timeAgoInSeconds = Math.floor((new Date().getTime() - new Date(dateStamp).getTime()) / 1000);
    let { interval, epoch } = this.getDuration(timeAgoInSeconds);
    let suffix = interval === 1 ? '' : 's';

    return `${interval} ${epoch}${suffix} ago`;
  }

}
