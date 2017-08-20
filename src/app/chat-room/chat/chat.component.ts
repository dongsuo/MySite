  /// <reference path="../../../typings/globals/socket.io-client/index.d.ts" />

import * as io from "socket.io-client";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor() {
    var socket = io.connect('http://localhost:3706');

   }

  ngOnInit() {
  }

}
