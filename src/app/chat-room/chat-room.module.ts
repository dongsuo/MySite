
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ChatComponent,ChangeNameDialog,NewRoomDialog } from './chat/chat.component';

import { ChatRoutingModule } from "./chat-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ChatRoutingModule,
  ],
  declarations: [ChatComponent,ChangeNameDialog,NewRoomDialog],
  entryComponents: [ChangeNameDialog,NewRoomDialog]

})
export class ChatRoomModule { }
