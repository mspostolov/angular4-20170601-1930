import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receivingDate'
})
export class ReceivingDateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    var currentDate = new Date();
    var seconds = Math.floor((<any>currentDate - value) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }

    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }

    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }

    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }

    return Math.floor(seconds) + " seconds ago";
  }
}
