var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AuthorizationComponent } from "./authorization.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
var ContactRoutingModule = (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild([
                    {
                        path: 'authorization', component: AuthorizationComponent,
                        children: [
                            { path: 'login', component: LoginComponent },
                            { path: 'register', component: RegisterComponent },
                        ]
                    }
                ])],
            exports: [RouterModule]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());
export { ContactRoutingModule };
//# sourceMappingURL=authorization-routing.module.js.map