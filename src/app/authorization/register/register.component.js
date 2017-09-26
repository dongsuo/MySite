var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserInfo } from '../user';
import { UserService } from '../user.service';
var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.title = "注册";
        this.userInfo = new UserInfo('', '', '');
        // console.log('userInfo.email');
    }
    RegisterComponent.prototype.onSubmit = function (email, password) {
        // console.log(this.userInfo)
        this.userService.registerUser(this.userInfo)
            .then(function (res) {
            console.log(res);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Component({
            templateUrl: './register.component.html',
            styles: [
                'md-grid-tile form{ min-width: 300px;width: 25%;}',
                'md-input-container{width:100%;}',
                'button {width:100%;}'
            ],
            providers: [UserService]
        }),
        __metadata("design:paramtypes", [UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map