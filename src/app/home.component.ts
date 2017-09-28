import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <div class="home-container">
  <h1>
    我是徐晓飞，是一名程序员
  </h1>
  <div>Welcome to the real world ! It sucks! You're going to love it !
    <div>——From 《Friends》</div>
  </div>
</div>`,
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = '实验室';
  links = [
    {
      link: '/authorization/login',
      title: 'Login/Register',
      description: '基于NodeJS + Angular4 + Angular Material构建的登录/注册模块'
    },
    {
      link: '/chat',
      title: 'ChatingRoom',
      description: '聊天室'
    }
  ];

  constructor() {
  }

  ngOnInit() {

  }
}

