import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'./lab.component.html',
  styles:[
    'h3 {width:100%;}',
    'a {color:#000}',
    'md-toolbar {background:#3f51b5;color:#fff;text-align:center}',
    'md-card {width:50%;margin: 0 auto;margin-top:20px;position:relative;}',
    'md-card p {color:#6f6f6f;font-size:0.8rem;}'
  ]
})

export class LabComponent implements OnInit {
  title='实验室';
  links=[
    {
      link:'/authorization/login',
      title:'Login/Register',
      description:'基于NodeJS + Angular4 + Angular Material构建的登录/注册模块'
    },
    {
      link:'/chat',
      title:'ChatingRoom',
      description:'聊天室'
    }
  ];

  constructor() {
	}

	ngOnInit() {

	}
}

