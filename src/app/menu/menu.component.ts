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
	showMenu(str: String): void {
		this.hide = false;
		this.classArray.push('hoverIcon')
	}
	hideMenu(str: String): void {
		this.hide = true;
		this.classArray = ['material-icons']
	}
	constructor() {
	}

	ngOnInit() {

	}

}
