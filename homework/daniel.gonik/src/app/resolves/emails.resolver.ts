import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MailBoxService } from '../mail-box/mail-box.service';
import 'rxjs/add/operator/first';

@Injectable()
export class EmailsResolver implements Resolve<any> {
  constructor(
    private mailBoxService: MailBoxService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.mailBoxService.getEmails();
  }
}
