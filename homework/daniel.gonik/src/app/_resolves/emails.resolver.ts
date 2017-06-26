import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MailBoxService } from '../mail-box/_services/mail-box.service';

@Injectable()
export class EmailsResolver implements Resolve<any> {
  constructor(
    private mailBoxService: MailBoxService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.mailBoxService.getEmails();
  }
}
