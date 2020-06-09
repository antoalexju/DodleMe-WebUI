import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html'
})
export class LoginpageComponent implements OnInit, OnDestroy {
  focus: boolean;
  focus1: boolean;
  isCollapsed: boolean;
  constructor() {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
