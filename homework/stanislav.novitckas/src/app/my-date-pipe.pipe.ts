import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).fromNow();
  }

}
