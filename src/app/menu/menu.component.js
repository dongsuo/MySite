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
var MenuComponent = (function () {
    function MenuComponent() {
        this.hide = true;
        this.menuList = [
            { name: 'Home', url: '', target: '' },
            { name: 'Blog', url: 'http://blog.xiaofeixu.cn', target: '_blank' },
            { name: 'AboutMe', url: 'http://blog.xiaofeixu.cn/about/', target: '_blank' }
        ];
        this.classArray = ['material-icons'];
        this.sidenavClass = ['sidenav-container-close'];
    }
    MenuComponent.prototype.handleOpen = function () {
        // console.log('1')
        this.sidenavClass = ['sidenav-container'];
    };
    MenuComponent.prototype.handleClose = function () {
        // console.log('1')
        this.sidenavClass = ['sidenav-container-close'];
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map