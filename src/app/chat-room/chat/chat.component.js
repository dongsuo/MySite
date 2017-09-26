var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MessageService } from "../chat.service";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
var ChatComponent = (function () {
    function ChatComponent(messageService, dialog) {
        var _this = this;
        this.messageService = messageService;
        this.dialog = dialog;
        // public chat:String = '';
        this.messages = [];
        this.message = '';
        this.name = '';
        this.room = '';
        this.roomList = [];
        this.messageService.chat.subscribe(function (response) {
            _this.messages.push(response);
            if (response.type === 'nameResult') {
                _this.name = response.name;
            }
            if (response.type === 'joinResult') {
                _this.room = response.room;
                _this.roomList.map(function (item) {
                    if (item.room === _this.room) {
                        item.type = 'active';
                        return;
                    }
                });
            }
            if (response.type === 'roomList') {
                _this.roomList = response.data.map(function (item) {
                    return { room: item, type: 'deactive' };
                });
                // this.roomList[this.room].type = 'active'
            }
        });
    }
    // this.messageService.send('hello')
    ChatComponent.prototype.sendMessage = function () {
        this.messageService.send(this.message);
        this.messages.push({ type: 'self', text: this.message + '：我' });
        this.message = '';
    };
    ChatComponent.prototype.addRoom = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewRoomDialog, {
            width: '600px',
            data: { room: this.room }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return false;
            _this.messageService.addRoom(result);
        });
    };
    ChatComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ChangeNameDialog, {
            width: '600px',
            data: { name: this.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return false;
            _this.name = result;
            _this.messageService.changeName(result);
        });
    };
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            styleUrls: ['./chat.component.css'],
            providers: [MessageService]
        }),
        __metadata("design:paramtypes", [MessageService, MdDialog])
    ], ChatComponent);
    return ChatComponent;
}());
export { ChatComponent };
var ChangeNameDialog = (function () {
    function ChangeNameDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '请输入新昵称';
    }
    ChangeNameDialog.prototype.submitName = function () {
        this.dialogRef.close();
    };
    ChangeNameDialog = __decorate([
        Component({
            selector: 'change-name-dialog',
            template: "<h2 md-dialog-title>\u4FEE\u6539\u6635\u79F0</h2>\n  <md-input-container><input mdInput tabindex=\"1\" [(ngModel)]=\"data.name\"></md-input-container>\n  <button md-button [md-dialog-close]=\"data.name\"  (click)=\"submitName\" tabindex=\"2\">Ok</button>",
        }),
        __param(1, Inject(MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [MdDialogRef, Object])
    ], ChangeNameDialog);
    return ChangeNameDialog;
}());
export { ChangeNameDialog };
var NewRoomDialog = (function () {
    function NewRoomDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '请输入房间名称';
    }
    NewRoomDialog.prototype.submitRoom = function () {
        this.dialogRef.close();
    };
    NewRoomDialog = __decorate([
        Component({
            selector: 'new-room-dialog',
            template: "<h2 md-dialog-title>\u6DFB\u52A0\u623F\u95F4</h2>\n  <md-input-container><input mdInput tabindex=\"1\" [(ngModel)]=\"data.room\"></md-input-container>\n  <button md-button [md-dialog-close]=\"data.room\"  (click)=\"submitRoom\" tabindex=\"2\">Ok</button>",
        }),
        __param(1, Inject(MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [MdDialogRef, Object])
    ], NewRoomDialog);
    return NewRoomDialog;
}());
export { NewRoomDialog };
//# sourceMappingURL=chat.component.js.map