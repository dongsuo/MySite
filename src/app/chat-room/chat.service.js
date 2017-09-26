var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import * as io from "socket.io-client";
var ioFunc = io.default ? io.default : io;
var MessageService = (function () {
    function MessageService(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.url = 'ws://xiaofeixu.cn';
        this.chat = new Observable(function (observer) {
            _this.socket = ioFunc(_this.url, {
                path: '/chat',
                reconnection: true,
                reconnectionAttempts: 5
            });
            _this.socket.on('message', function (message) {
                observer.next(message);
            });
            _this.socket.on('joinResult', function (joinResult) {
                observer.next(joinResult);
            });
            _this.socket.on('nameResult', function (nameResult) {
                observer.next(nameResult);
            });
            _this.socket.on('roomList', function (roomList) {
                observer.next(roomList);
            });
            _this.socket.on('disconnect', function () {
            });
        });
        // this.socket = io(this.url)
    }
    MessageService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    MessageService.prototype.changeName = function (name) {
        this.socket.emit('changeName', name);
    };
    MessageService.prototype.addRoom = function (room) {
        this.socket.emit('newRoom', room);
    };
    MessageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgZone])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=chat.service.js.map