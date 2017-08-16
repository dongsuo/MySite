import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { UserInfo } from './user';

@Injectable()
export class UserService {
  private registerUrl = 'http://xiaofeixu.cn:9527/register';
  private loginUrl = 'http://xiaofeixu.cn:9527/login'
  private headers = new Headers({ 'Content-Type': 'text/json' });
  constructor(private http: Http) { };

  registerUser(userInfo):Promise<UserInfo> {
    return this.http.post(this.registerUrl, userInfo)
      .toPromise()
      // .map(response => response.json().data as object);
      .then(response => response.json() as UserInfo)

    // return Promise.resolve({result:true});
  }

  loginUser(userInfo) {
    return this.http.post(this.loginUrl, userInfo)
      .toPromise()
      .then(response => response.json() as object)
      .catch(err => { console.log('err' + err) });
  }
}
