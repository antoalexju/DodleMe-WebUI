import {Component, OnInit, OnDestroy} from '@angular/core';
import noUiSlider from "nouislider";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  constructor() { }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
