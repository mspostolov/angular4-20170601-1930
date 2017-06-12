import { Pipe, PipeTransform } from '@angular/core';


interface IFullUnit {
  years: number;
  months: number;
  days: number;
};

@Pipe({
  name: 'elapsed',
  pure: false
})
export class ElapsedPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const nowTime = Date.now(),
          pastTime = Date.parse(value),
          nowDate = new Date(nowTime),
          pastDate = new Date(pastTime),
          deltaTime = nowTime - pastTime,

          seconds = Math.floor(deltaTime / 1000),
          minutes = Math.floor(seconds / 60),
          hours = Math.floor(minutes / 60);

    let days = Math.floor(hours / 24),
        months = 0,
        years = 0,
        elapsed = '';

    if (days >= 28) {
      ({ years, months, days } = this.getFullElapsedUnit(nowDate, pastDate));
    }

    if (years > 0) {
      elapsed = `${years} ${ElapsedPipe.plural(years, 'year')}`;

      if (months > 0) {
        elapsed = `${elapsed} and ${months} ${ElapsedPipe.plural(months, 'month')}`
      }

      elapsed = `${elapsed} ago`;
    } else if (months > 0) {
      elapsed = `${months} ${ElapsedPipe.plural(months, 'month')}`;

      if (days > 0) {
        elapsed = `${elapsed} and ${days} ${ElapsedPipe.plural(days, 'days')}`
      }

      elapsed = `${elapsed} ago`;
    } else if (days > 0) {
      elapsed = `${days} ${ElapsedPipe.plural(days, 'day')} ago`;
    } else if (hours > 0) {
      elapsed = `${hours} ${ElapsedPipe.plural(hours, 'hour')} ago`;
    } else if (minutes > 0) {
      elapsed = `${minutes} ${ElapsedPipe.plural(minutes, 'minute')} ago`;
    } else if (seconds > 0) {
      elapsed = `${seconds} ${ElapsedPipe.plural(seconds, 'second')} ago`;
    } else if (seconds === 0) {
      elapsed = 'a moment ago';
    } else {
      elapsed = 'in future';
    }

    return elapsed;
  }

  private getFullElapsedUnit(now: Date, past: Date): IFullUnit {
    let nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
        pastDate = new Date(past.getFullYear(), past.getMonth(), past.getDate()),
        deltaFullYears = 0,
        deltaFullMonth = 0,
        deltaFullDays = 0;

    if (pastDate < nowDate) {
      while (pastDate < nowDate) {
        deltaFullYears++;
        pastDate = new Date(pastDate.getFullYear() + 1, pastDate.getMonth(), pastDate.getDate());
      }

      if (pastDate > nowDate) {
        deltaFullYears--;
        pastDate = new Date(pastDate.getFullYear() - 1, pastDate.getMonth(), pastDate.getDate());
      }
    }

    if (pastDate < nowDate) {
      while (pastDate < nowDate) {
        deltaFullMonth++;
        pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() + 1, pastDate.getDate());
      }

      if (pastDate > nowDate) {
        deltaFullMonth--;
        pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth() - 1, pastDate.getDate());
      }
    }

    if (pastDate < nowDate) {
      while (pastDate < nowDate) {
        deltaFullDays++;
        pastDate = new Date(pastDate.getFullYear(), pastDate.getMonth(), pastDate.getDate() + 1);
      }

      if (pastDate > nowDate) {
        deltaFullDays--;
      }
    }

    return {
      years: deltaFullYears,
      months: deltaFullMonth,
      days: deltaFullDays
    };
  }

  private static plural(k: number, name: string): string {
    return k > 1 ? `${name}s` : name;
  }

}
