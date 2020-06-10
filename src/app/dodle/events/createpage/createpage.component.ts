import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ApiService} from "../../../service/api.service";

@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.scss']
})
export class CreatepageComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  focus: boolean;
  focus1: boolean;
  focus2: boolean;
  focus3: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("evtcreate-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("evtcreate-page");
  }



}
