import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = true;
	menuList = [
		{ name: 'Home', url: '/' ,target:''},
		{ name: 'Blog', url: 'http://blog.xiaofeixu.cn',target:'_blank' },
		{ name: 'AboutMe', url: 'http://blog.xiaofeixu.cn/about/',target:'_blank' }];
	classArray = ['material-icons'];
}
