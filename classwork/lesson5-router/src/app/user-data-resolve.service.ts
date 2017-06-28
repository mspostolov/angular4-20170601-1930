import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataResolveService implements Resolve<{name: string}> {

  resolve() {
    return Observable.of({ name: 'Alice' });
  }

}
