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
var LabHomeComponent = (function () {
    function LabHomeComponent() {
        this.title = '实验室';
        this.links = [
            {
                link: '/authorization/login',
                title: 'Login/Register',
                description: '基于NodeJS + Angular4 + Angular Material构建的登录/注册模块'
            },
            {
                link: '/chat',
                title: 'ChatingRoom',
                description: '聊天室'
            }
        ];
    }
    LabHomeComponent.prototype.ngOnInit = function () {
    };
    LabHomeComponent = __decorate([
        Component({
            templateUrl: './labHome.component.html',
            styles: [
                'h3 {width:100%;}',
                'a {color:#000}',
                'md-toolbar {background:#3f51b5;color:#fff;text-align:center}',
                'md-card {width:50%;margin: 0 auto;margin-top:20px;position:relative;z-index:1;}',
                'md-card p {color:#6f6f6f;font-size:0.8rem;}'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LabHomeComponent);
    return LabHomeComponent;
}());
export { LabHomeComponent };
//# sourceMappingURL=labHome.component.js.map