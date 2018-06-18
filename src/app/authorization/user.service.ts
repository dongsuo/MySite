import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserInfo } from './user';

@Injectable()
export class UserService {
  private registerUrl = 'http://xiaofeixu.cn/register';
  private loginUrl = 'http://xiaofeixu.cn/login'
  private headers = new Headers({ 'Content-Type': 'text/json' });
  constructor(private http: Http) { };

  registerUser(userInfo:UserInfo):Promise<UserInfo> {
    return this.http.post(this.registerUrl, userInfo)
      .toPromise()
      // .map(response => response.json().data as object);
      .then(response => response.json() as UserInfo)

    // return Promise.resolve({result:true});
  }

  loginUser(userInfo:UserInfo) {
    return this.http.post(this.loginUrl, userInfo)
      .toPromise()
      .then(response => response.json() as object)
      .catch(err => { console.log('err' + err) });
  }
}
