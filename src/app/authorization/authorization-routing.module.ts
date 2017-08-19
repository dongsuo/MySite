import { NgModule } from '@angular/core';
import { AuthorizationComponent } from "./authorization.component";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'authorization', component: AuthorizationComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
