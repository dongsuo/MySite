import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import 'hammerjs';

import { AuthorizationModule } from "./authorization/authorization.module";
import { ChatRoomModule } from "./chat-room/chat-room.module";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from "./app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthorizationModule,
    ChatRoomModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
