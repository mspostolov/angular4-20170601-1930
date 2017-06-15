import {Inject, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserServiceService {
  private _apiUrl: string;
  constructor(@Inject('API_URL') API_URL, private _http: Http) {
    this._apiUrl = API_URL;
  }
  getAll() {
    return this._http.get(this._apiUrl).toPromise();
  }

}
