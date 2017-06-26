import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MailBoxService } from '../mail-box/_services/mail-box.service';

@Injectable()
export class AuthorsResolver implements Resolve<any> {
  constructor(
    private mailBoxService: MailBoxService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.mailBoxService.getAuthors();
  }
}
