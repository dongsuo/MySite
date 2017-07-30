import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'./labHome.component.html',
})

export class LabHomeComponent implements OnInit {
  title='实验室';
  links=[{link:'/authorization/login',title:'Login/Register'}];

  constructor() {
	}

	ngOnInit() {

	}
}
