import { NgModule } from '@angular/core';
import { ChatComponent } from "./chat/chat.component";
import { RouterModule, Routes } from "@angular/router";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'chat', component: ChatComponent,

    }
  ])],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
