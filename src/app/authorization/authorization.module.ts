import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material.module';
import { ContactRoutingModule } from './authorization-routing.module';

import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ContactRoutingModule,
    MaterialModule,
  ],
  declarations: [AuthorizationComponent,LoginComponent,RegisterComponent],
})
export class AuthorizationModule { }
