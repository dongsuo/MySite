
import { Component, OnInit, Inject,ElementRef } from '@angular/core';
import { MessageService } from "../chat.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Response } from "../chatResponse";
import { Room } from "../Room";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [MessageService]
})

// function scrollToBottom(){
//   this.$refs.terminalWindow.scrollTop = this.$refs.terminalLastLine.offsetTop;
// }

export class ChatComponent {
  public messages:Array<Object> = [];
  public message = '';
  public name:String = '';
  public room:String = ''
  public roomList:Array<any> = []

  sendMessage() {
    this.messageService.send(this.message)
    this.messages.push({ type: 'self', text: this.message + '：我' })
    this.message = '';
    setTimeout(() => {
      const lines = this.el.nativeElement.querySelectorAll('.message-list p')
      const l = lines.length-1
      this.el.nativeElement.querySelector('.message-list').scrollTop = lines[l].offsetTop
    }, 0);
  }
  addRoom():void{
    let dialogRef = this.dialog.open(NewRoomDialog, {
      width: '600px',
      data: { room: this.room }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return false;
      this.messageService.addRoom(result)
    });

  }
  removeRoom(value):void{
    this.messageService.removeRoom(value)
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(ChangeNameDialog, {
      width: '600px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return false;
      this.name = result;
      this.messageService.changeName(result)
    });
  }
  constructor(
    private messageService: MessageService,
    public dialog: MatDialog,
    private el: ElementRef) {
    this.messageService.chat.subscribe((response:Response) => {
      this.messages.push(response)
      if (response.type === 'nameResult') {
        this.name = response.name
      }
      if (response.type === 'joinResult') {
        this.room = response.room
        this.roomList.map((item:any)=>{
          if(item.room === this.room){
            item.type = 'active';
            return;
          }
        })
      }
      if(response.type ==='roomList'){
        this.roomList = response.data.map((item:Room)=>{
          item.type = 'deactive'
          return item
        })
      }
    })
  }

}

@Component({
  selector: 'change-name-dialog',
  template: `<h2 mat-dialog-title>修改昵称</h2>
  <mat-form-field><input matInput tabindex="1" [(ngModel)]="data.name"></mat-form-field>
  <button mat-button [mat-dialog-close]="data.name"  (click)="submitName" tabindex="2">Ok</button>`,
})
export class ChangeNameDialog {

  constructor(
    public dialogRef: MatDialogRef<ChangeNameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    title = '请输入新昵称'
    submitName():void{
      this.dialogRef.close();
    }
}

@Component({
  selector: 'new-room-dialog',
  template: `<h2 mat-dialog-title>添加房间</h2>
  <mat-form-field><input matInput tabindex="1" [(ngModel)]="data.room"></mat-form-field>
  <button mat-button [mat-dialog-close]="data.room"  (click)="submitRoom" tabindex="2">Ok</button>`,
})
export class NewRoomDialog {
  constructor(
    public dialogRef: MatDialogRef<NewRoomDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    title = '请输入房间名称'
    submitRoom():void{
      this.dialogRef.close();
    }
}
