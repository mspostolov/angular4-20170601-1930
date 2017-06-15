import { Injectable, Inject } from '@angular/core';
import  { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class UserService {

  constructor(@Inject('LEARN_JS_USERS_API_ENDPOINT') private API_URL: string, private _http: Http) { }

  getAll() {
    return this._http.get(this.API_URL).toPromise().then(response => response.json())
  }
}
