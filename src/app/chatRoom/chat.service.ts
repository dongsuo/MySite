
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';
import * as io from "socket.io-client";

var ioFunc = (io as any).default ? (io as any).default : io;

@Injectable()
export class MessageService {
  private url = 'wss://xiaofeixu.cn';

  private socket:io.Socket;
  constructor() {
    // this.socket = io(this.url)
   }
   chat = new Observable(observer=>{
    this.socket = ioFunc(this.url,{
      path:'/chat',
      reconnection :true,
      reconnectionAttempts:5
    })
    this.socket.on('message',(message:Object)=>{
      observer.next(message)
    })
    this.socket.on('joinResult',(joinResult:Object)=>{
      observer.next(joinResult)
    })
    this.socket.on('nameResult',(nameResult:Object)=>{
      observer.next(nameResult)
    })
    this.socket.on('roomList',(roomList:Object)=>{
      observer.next(roomList)
    })
    this.socket.on('roomResult',(roomResult:Object)=>{
      console.log(roomResult)
      observer.next(roomResult)
    })
    this.socket.on('disconnect',()=>{
    })
  })
   send(message:String){
    this.socket.emit('message',message)
   }
   changeName(name:String){
     this.socket.emit('changeName',name)
   }
   addRoom(room:String){
    this.socket.emit('newRoom',room)
   }
   removeRoom(room:String){
     console.log(room)
    this.socket.emit('removeRoom',room)
   }
}
