import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ContactsService } from '../mail-box/_services/contacts.service';

@Injectable()
export class ContactsResolver implements Resolve<any> {
  constructor(
    private contactsService: ContactsService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return this.contactsService.getUsers();
  }
}
