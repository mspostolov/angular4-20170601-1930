import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myformat'
})
export class MyformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value / 1000;
  }

}
