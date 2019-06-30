import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import {CommonModule} from '@angular/common';
import { MaterialModule } from "./material.module";


import { LabComponent } from "./lab/lab.component";
import { HomeComponent } from "./home.component";


export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'magic',component:LabComponent}
]

@NgModule({
  declarations: [
    LabComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRouter {}
