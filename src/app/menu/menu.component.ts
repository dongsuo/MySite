import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	hide = true;
	menuList = [
		{ name: 'Home', url: '' ,target:''},
		{ name: 'Blog', url: 'http://blog.xiaofeixu.cn',target:'_blank' },
		{ name: 'AboutMe', url: 'http://blog.xiaofeixu.cn/about/',target:'_blank' }];
	classArray = ['material-icons'];
	sidenavClass = ['sidenav-container-close']
	handleOpen() {
		console.log('1')
		this.sidenavClass = ['sidenav-container']
	}
	handleClose(){
		console.log('1')
		this.sidenavClass = ['sidenav-container-close']
	}
	constructor() {
	}

	ngOnInit() {

	}

}
