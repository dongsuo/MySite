var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ChatComponent, ChangeNameDialog, NewRoomDialog } from './chat/chat.component';
import { ChatRoutingModule } from "./chat-routing.module";
var ChatRoomModule = (function () {
    function ChatRoomModule() {
    }
    ChatRoomModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MaterialModule,
                FormsModule,
                ChatRoutingModule,
            ],
            declarations: [ChatComponent, ChangeNameDialog, NewRoomDialog],
            entryComponents: [ChangeNameDialog, NewRoomDialog]
        })
    ], ChatRoomModule);
    return ChatRoomModule;
}());
export { ChatRoomModule };
//# sourceMappingURL=chat-room.module.js.map