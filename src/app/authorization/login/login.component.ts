import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user';
import {UserService} from '../user.service';



@Component({
  templateUrl: './login.component.html',
  styles:[
    'mat-grid-tile form{ min-width: 300px;width: 25%;}',
    'mat-input-container {width:100%;}',
    'button{width:100%;}'
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

