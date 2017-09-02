
import { Injectable,NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import * as io from "socket.io-client";

@Injectable()
export class MessageService {
  private url = 'ws://localhost:9527';

  private socket:SocketIOClient.Socket;
  constructor(private ngZone:NgZone) {
    // this.socket = io(this.url)
   }
   chat = new Observable(observer=>{
    this.socket = io(this.url,{
      path:'/chat',
      reconnection :true,
      reconnectionAttempts:5
    })
    this.socket.on('message',message=>{
      // console.log(message)
      observer.next(message)
    })
    this.socket.on('joinResult',joinResult=>{
      console.log(joinResult)
      observer.next(joinResult)
    })
    this.socket.on('nameResult',nameResult=>{
      console.log(nameResult)
      observer.next(nameResult)
    })
    this.socket.on('roomList',(roomList)=>{
      console.log(roomList)
      observer.next(roomList)
    })
    this.socket.on('disconnect',()=>{
      console.log('disconnected')
    })
  })
   send(message){
    //  console.log(message)
    this.socket.emit('message',message)
   }
   changeName(name){
    //  console.log(name);
     this.socket.emit('changeName',name)
   }
   addRoom(room){
    this.socket.emit('newRoom',room)
   }
}
