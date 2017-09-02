
import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from "../chat.service";
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [MessageService]
})
export class ChatComponent implements OnInit {
  private chat;
  private messages = [];
  private message = '';
  private name = '';
  private room = ''
  private roomList = []
  // this.messageService.send('hello')
  sendMessage() {
    this.messageService.send(this.message)
    this.messages.push({ type: 'self', text: this.message + '：我' })
    this.message = '';
  }
  constructor(private messageService: MessageService, public dialog: MdDialog) {
    this.chat = this.messageService.chat.subscribe(response => {
      console.log(response)
      this.messages.push(response)
      if (response.type === 'nameResult') {
        this.name = response.name
      }
      if (response.type === 'joinResult') {
        this.room = response.room
        this.roomList.map((item)=>{
          if(item.room === this.room){
            item.type = 'active';
            return;
          }
        })
      }
      if(response.type ==='roomList'){
        // console.log(response.data)
        this.roomList = response.data.map((item)=>{
          return {room:item,type:'deactive'}
        })
        console.log(this.room)
        console.log(this.roomList)

        // this.roomList[this.room].type = 'active'
      }
    })
  }
  addRoom():void{
    console.log('add')
    let dialogRef = this.dialog.open(NewRoomDialog, {
      width: '600px',
      data: { room: this.room }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if(!result) return false;
      this.messageService.addRoom(result)
    });

  }
  openDialog(): void {
    // console.log('dialog')
    let dialogRef = this.dialog.open(ChangeNameDialog, {
      width: '600px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      if(!result) return false;
      this.name = result;
      this.messageService.changeName(result)
    });
  }

  ngOnInit() {

  }

}

@Component({
  selector: 'change-name-dialog',
  template: `<h2 md-dialog-title>修改昵称</h2>
  <md-input-container><input mdInput tabindex="1" [(ngModel)]="data.name"></md-input-container>
  <button md-button [md-dialog-close]="data.name"  (click)="submitName" tabindex="2">Ok</button>`,
})
export class ChangeNameDialog {

  constructor(
    public dialogRef: MdDialogRef<ChangeNameDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
    title = '请输入新昵称'
    submitName():void{
      this.dialogRef.close();
    }
}

@Component({
  selector: 'new-room-dialog',
  template: `<h2 md-dialog-title>添加房间</h2>
  <md-input-container><input mdInput tabindex="1" [(ngModel)]="data.room"></md-input-container>
  <button md-button [md-dialog-close]="data.room"  (click)="submitRoom" tabindex="2">Ok</button>`,
})
export class NewRoomDialog {

  constructor(
    public dialogRef: MdDialogRef<NewRoomDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }
    title = '请输入房间名称'
    submitRoom():void{
      this.dialogRef.close();
    }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
