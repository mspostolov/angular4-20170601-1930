import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User, args?: any): any {
    return `${user.name} ${user.surname}`;
  }

}
