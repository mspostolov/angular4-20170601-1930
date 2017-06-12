import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeHelper } from 'app/date-time-helper';

@Pipe({
    name: 'emailDate'
})
export class EmailDatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        const strDiffMinutes = DateTimeHelper.strDiffMinutes(value, new Date());
        return `${strDiffMinutes} ago`;
    }
}
