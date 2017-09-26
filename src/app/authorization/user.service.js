var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.registerUrl = 'http://xiaofeixu.cn/register';
        this.loginUrl = 'http://xiaofeixu.cn/login';
        this.headers = new Headers({ 'Content-Type': 'text/json' });
    }
    ;
    UserService.prototype.registerUser = function (userInfo) {
        return this.http.post(this.registerUrl, userInfo)
            .toPromise()
            .then(function (response) { return response.json(); });
        // return Promise.resolve({result:true});
    };
    UserService.prototype.loginUser = function (userInfo) {
        return this.http.post(this.loginUrl, userInfo)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { console.log('err' + err); });
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map