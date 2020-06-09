import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overviewpage',
  templateUrl: './overviewpage.component.html',
  styleUrls: ['./overviewpage.component.scss']
})
export class OverviewpageComponent implements OnInit {
    isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("overviewpage-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("overviewpage-page");
  }

}
