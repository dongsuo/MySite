import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../user';
import {UserService} from '../user.service';


@Component({
  templateUrl: './register.component.html',
  styles:[
    'mat-grid-tile form{ width: 300px;text-align:center;}',
    'mat-input-container{width:85%;}',
    'mat-form-field {width: 85%;}',
    'button {width:85%;}'
  ],
  providers: [UserService]
})

export class RegisterComponent implements OnInit {
  title='注册';
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
