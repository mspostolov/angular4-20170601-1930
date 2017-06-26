import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailboxDate'
})
export class MailboxDatePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    var now = new Date();
    var diff = Math.abs(now.getTime() - value.getTime());
    var countDays = Math.ceil(diff / (1000 * 3600 * 24));
    var result = '';
    if(countDays < 1){
      result = 'no more than 1 day before'

    }
    else if(countDays < 2){
      result = 'no more than 2 days before'
    }
    else{
      result = value.toUTCString();
    }
    return result;
  }

}
