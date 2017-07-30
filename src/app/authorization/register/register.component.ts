import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../user';
import {UserService} from '../../user.service';


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})



export class RegisterComponent implements OnInit {

	onSubmit(email,password) {
    	// console.log(this.userInfo)
    	this.userService.registerUser(this.userInfo)
    	.then(res=>{
    		console.log(res)
    	})
  	}
  userInfo = new UserInfo('','')

  constructor(private userService: UserService) {
  	// console.log('userInfo.email');
  }

  ngOnInit() {

  }

}
