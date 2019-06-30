import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user';
import {UserService} from '../user.service';



@Component({
  templateUrl: './login.component.html',
  styles:[
    'mat-grid-tile form{ width: 300px;text-align:center;}',
    'mat-input-container{width:85%;}',
    'mat-form-field {width: 85%;}',
    'button {width:85%;}'
  ],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  onSubmit(email:String,password:String){
    this.userService.loginUser(this.userInfo)
    .then(res=>{
    		console.log(res)
    	})
  }
  userInfo = new UserInfo('','','');

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

