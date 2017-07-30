import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../user';
import {UserService} from '../../user.service';



@Component({
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  onSubmit(email,password){
    this.userService.loginUser(this.userInfo)
    .then(res=>{
    		console.log(res)
    	})
  }
  userInfo = new UserInfo('','');

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}

