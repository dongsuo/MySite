
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';


import { ChatComponent } from './chat/chat.component';

import { ChatRoutingModule } from "./chat-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ChatRoutingModule,
  ],
  declarations: [ChatComponent]
})
export class ChatRoomModule { }
