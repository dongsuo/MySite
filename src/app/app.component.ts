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
		{ name: 'Blog', url: 'https://blog.islasher.com',target:'_blank' },
		{ name: 'AboutMe', url: 'https://blog.islasher.com/about/',target:'_blank' }];
	classArray = ['material-icons'];
}
