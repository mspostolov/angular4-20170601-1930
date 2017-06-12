import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(value: Date): string {
 
           let deltaHours = (new Date().getTime() - value.getTime()) / (3600 *1000);

           if (deltaHours < 1)
             return  "Недавно";
           
            if (deltaHours < 24)
                return Math.trunc(deltaHours) + " ч. назад";
        
           return Math.trunc(deltaHours / 24) + " дн. назад";;
          
  }
}