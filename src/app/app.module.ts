import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRouter } from "./router.module";
import { AuthorizationModule } from "./authorization/authorization.module";
import { ChatModule } from "./chatRoom/chat.module";

import { AppComponent } from './app.component';
// import { LabComponent } from "./lab/lab.component";

@NgModule({
  declarations: [
    AppComponent,
    // LabComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRouter,
    AuthorizationModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
