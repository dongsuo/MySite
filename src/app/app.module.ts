import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { LoginComponent } from "./authorization/login/login.component";
import { RegisterComponent } from "./authorization/register/register.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { LabHomeComponent } from "./lab/labHome.component";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routers: Routes = [
  { path: '', component: HomeComponent },
  { path: 'authorization', component: AuthorizationComponent,
  children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ] },
  {path:'lab',component:LabHomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthorizationComponent,
    LabHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routers, {
      enableTracing: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
