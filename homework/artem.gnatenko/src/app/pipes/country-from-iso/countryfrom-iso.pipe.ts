import { Pipe, PipeTransform } from '@angular/core';
import { countries } from './countries';

@Pipe({
  name: 'countryfromISO'
})
export class CountryfromISOPipe implements PipeTransform {

  transform(value: string): string {
    return countries[value] || value;
  }

}
