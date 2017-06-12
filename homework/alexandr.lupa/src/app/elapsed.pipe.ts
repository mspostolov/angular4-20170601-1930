import { Pipe, PipeTransform } from '@angular/core';


interface IFullUnit {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

@Pipe({
  name: 'elapsed',
  pure: false
})
export class ElapsedPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    console.log(value);
    const { years, months, days, hours, minutes, seconds } = this.getFullElapsedUnit(new Date(), new Date(value));
    let elapsed: string;

    switch (true) {
      case years > 0:
        elapsed = `${years} ${ElapsedPipe.plural(years, 'year')}`;

        if (months > 0) {
          elapsed = `${elapsed} and ${months} ${ElapsedPipe.plural(months, 'month')}`
        }

        elapsed = `${elapsed} ago`;
        break;


      case months > 0:
        elapsed = `${months} ${ElapsedPipe.plural(months, 'month')}`;

        if (days > 0) {
          elapsed = `${elapsed} and ${days} ${ElapsedPipe.plural(days, 'days')}`
        }

        elapsed = `${elapsed} ago`;
        break;


      case days > 0:
        elapsed = `${days} ${ElapsedPipe.plural(days, 'day')} ago`;
        break;


      case hours > 0:
        elapsed = `${hours} ${ElapsedPipe.plural(hours, 'hour')} ago`;
        break;


      case minutes > 0:
        elapsed = `${minutes} ${ElapsedPipe.plural(minutes, 'minute')} ago`;
        break;


      case seconds > 0:
        elapsed = `${seconds} ${ElapsedPipe.plural(seconds, 'second')} ago`;
        break;


      case seconds === 0:
        elapsed = 'a moment ago';
        break;


      default:
        elapsed = 'in future';
    }

    return elapsed;
  }

  private getFullElapsedUnit(now: Date, past: Date): IFullUnit {
    let deltaTime = now.getTime() - past.getTime(),

        seconds = Math.floor(deltaTime / 1000),
        minutes = Math.floor(deltaTime / (60 * 1000)),
        hours   = Math.floor(deltaTime / (60 * 60 * 1000)),
        days    = Math.floor(deltaTime / (24 * 60 * 60 * 1000)),
        months  = 0,
        years   = 0;

    if (days > 28) {
      let nowDate   = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
          pastDate  = new Date(past.getFullYear(), past.getMonth(), past.getDate());

      if (pastDate < nowDate) {
        while (pastDate < nowDate) {
          years++;
          pastDate = new Date(pastDate.getFullYear() + 1, pastDate.getMonth(), pastDate.getDate());
        }

        if (pastDate > nowDate) {
          years--;
          pastDate = new Date(pastDate.getFullYear() - 1, pastDate.getMonth(), pastDate.getDate());
        }
      }

      if (pastDate < nowDate) {
        while (pastDate < nowDate) {
          months++;
          pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() + 1, pastDate.getDate());
        }

        if (pastDate > nowDate) {
          months--;
          pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() - 1, pastDate.getDate());
        }
      }

      if (pastDate < nowDate) {
        while (pastDate < nowDate) {
          days++;
          pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth(), pastDate.getDate() + 1);
        }

        if (pastDate > nowDate) {
          days--;
        }
      }
    }

    return { years, months, days, hours, minutes, seconds };
  }

  private static plural(k: number, name: string): string {
    return k > 1 ? `${name}s` : name;
  }

}
