import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';


import { LabHomeComponent } from "./lab/labHome.component";
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'magic',component:LabHomeComponent}
]

@NgModule({
  declarations: [
    LabHomeComponent,
    HomeComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
