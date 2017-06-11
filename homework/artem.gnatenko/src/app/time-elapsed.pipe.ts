import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

interface TimeUnit {
  index: number,
  limit: number,
  multiplier: number,
  name: string,
  oneName: string,
  zeroName: string
}

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  private units: {
    'ms': TimeUnit,
    's': TimeUnit,
    'm': TimeUnit,
    'h': TimeUnit,
    'd': TimeUnit
  }

  constructor() {
    this.units = {
      'ms': {
        index: 1,
        limit: 1000,
        multiplier: 1,
        name: " milliseconds ago",
        oneName: " millisecond ago",
        zeroName: "Less than millisecond ago"
      },
      's': {
        index: 2,
        limit: 60,
        multiplier: 1000,
        name: " seconds ago",
        oneName: " second ago",
        zeroName: "Less than second ago"
      },
      'm': {
        index: 3,
        limit: 60,
        multiplier: 60000,
        name: " minutes ago",
        oneName: " minute ago",
        zeroName: "Less than minute ago"
      },
      'h': {
        index: 4,
        limit: 24,
        multiplier: 3600000,
        name: " hours ago",
        oneName: " hour ago",
        zeroName: "Less than hour ago"
      },
      'd': {
        index: 5,
        limit: 10000000,
        multiplier: 86400000,
        name: " days ago",
        oneName: "Yesterday",
        zeroName: "Today"
      }
    }
  }

  transform(
    date: any,
    format?: string,
    limit: number = 25,
    unitFrom: string = 's',
    unitTo: string = 'd',
    unit?: string,
    localize: string = 'en-US'
  ): string {
    let newDate:number = new Date(date).getTime();
    let convertedDate = this.getElapsedCount(newDate, unit, unitFrom);

    if (this.checkUnitTo(unitTo, convertedDate) && this.checkLimit(limit, unitTo, convertedDate)) {
      return this.getDateView(convertedDate);
    }
    else {
      return new DatePipe(localize).transform(newDate, format);
    };
  }

  private checkUnitTo(unitTo: string = 'd', convertedDate: any) {
    return convertedDate.unit.index <= this.units[unitTo].index;
  }

  private checkLimit(limit: number, unitTo: string = 'd', convertedDate: any) {
    return this.units[unitTo].index > convertedDate.unit.index || convertedDate.count < limit;
  }

  private getDateView(convertedDate: any) {
    if (!convertedDate.count) {
      return convertedDate.unit.zeroName;
    }
    else if (convertedDate.unit.index == 5 && convertedDate.count == 1) {
      return convertedDate.unit.oneName;
    }
    else {
      return convertedDate.count + (convertedDate.count > 1 ? convertedDate.unit.name : convertedDate.unit.oneName);
    }
  }

  private getElapsedCount(date: number, unit: string, unitFrom: string) {
    let dateElapsed: number = new Date().getTime() - date;
    if (unit) {
      return {
        count: Math.floor(dateElapsed / this.units[unit].multiplier),
        unit: this.units[unit]
      };
    }
    for (unit in this.units) {
      let currentUnitCount = Math.floor(dateElapsed / this.units[unit].multiplier);
      if (currentUnitCount < this.units[unit].limit && this.units[unit].index >= this.units[unitFrom].index) {
        return {
          count: currentUnitCount,
          unit: this.units[unit]
        };
      }
    }
  }
}
