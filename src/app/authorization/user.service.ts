import { Injectable } from '@angular/core';
// import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user';

@Injectable()
export class UserService {
  private registerUrl = 'https://islasher.com/register';
  private loginUrl = 'https://islasher.com/login'
  constructor(private http: HttpClient) { };

  registerUser(userInfo:UserInfo):Promise<UserInfo> {
    return this.http.post(this.registerUrl, userInfo)
      .toPromise()
      // .map(response => response.json().data as object);
      .then(response => response as UserInfo)

    // return Promise.resolve({result:true});
  }

  loginUser(userInfo:UserInfo) {
    return this.http.post(this.loginUrl, userInfo)
      .toPromise()
      .then(response => response as object)
      .catch(err => { console.log('err' + err) });
  }
}
