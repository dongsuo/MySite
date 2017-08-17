import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'./labHome.component.html',
  styles:[
    'md-card {width:50%;margin: 0 auto;margin-top:20px;position:relative;z-index:1;}',
    'md-card p {color:#6f6f6f;font-size:0.8rem;}'
  ]
})

export class LabHomeComponent implements OnInit {
  title='实验室';
  links=[
    {
      link:'/authorization/login',
      title:'Login/Register',
      description:'基于NodeJS + Angular4 + Angular Material构建的登录/注册模块'
    }
  ];

  constructor() {
	}

	ngOnInit() {

	}
}
