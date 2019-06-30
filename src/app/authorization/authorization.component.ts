import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './authorization.component.html',
    styles:[
      'mat-toolbar {background-color:#3f51b5;font-size:0;}',
      'nav {border-bottom:none;margin: 0 auto;}',
      'router-outlet {color:#000;}',
      'a {color:#fff;}'
    ]
})

export class AuthorizationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
