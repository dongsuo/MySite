import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user';
import {UserService} from '../user.service';


@Component({
  templateUrl: './register.component.html',
  styles:[
    'md-grid-tile form{ min-width: 300px;width: 25%;}',
    'md-input-container{width:100%;}',
    'button {width:100%;}'
  ],
  providers: [UserService]
})



export class RegisterComponent implements OnInit {
  title="注册";
	onSubmit(email:String,password:String) {
    	// console.log(this.userInfo)
    	this.userService.registerUser(this.userInfo)
    	.then(res=>{
    		console.log(res)
    	})
  	}
  userInfo = new UserInfo('','','');

  constructor(private userService: UserService) {
  	// console.log('userInfo.email');
  }

  ngOnInit() {

  }

}
