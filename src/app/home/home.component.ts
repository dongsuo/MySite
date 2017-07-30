import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = '我是徐晓飞，是一名程序员';
  constructor() { }

  ngOnInit() {
  }

}
