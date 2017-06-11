import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myformat'
})
export class MyformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
<<<<<<< HEAD
    return `${value} / ${args[0] || ''}` ;
=======
    return value / 1000;
>>>>>>> 9a93399d5899d62154275311ba58e73acf54e7ad
  }

}
